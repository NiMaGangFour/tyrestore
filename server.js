const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const crypto = require("crypto");
const mongoose = require("mongoose");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const methodOverride = require("method-override");

const app = express();

//Middleware
app.use(bodyParser.json({ type: "application/json" })).use(
  cors({
    methods: ["POST", "GET", "PUT", "DELETE"],
    allowedHeaders: [
      "Access-Control-Allow-Origin",
      "Content-Type",
      "x-access-token",
    ],
  })
);

app.use(methodOverride("_method"));

const port = process.env.PORT || 5000;
// const mongoose = require("mongoose");

// console.log that your server is up and running
app.listen(port, () =>
  console.log(`Server listening at http://localhost: ${port}`)
);

// Mongo URI
const mongoURI =
  "mongodb+srv://dbUser:nCRo9dSrxTl3rBfg@cluster0-frk7s.mongodb.net/tyrestore_dev?retryWrites=true&w=majority";
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
});

// const mongoURI =
//   "mongodb+srv://dbUser:nCRo9dSrxTl3rBfg@cluster0-frk7s.mongodb.net/tyrestore_dev?retryWrites=true&w=majority";
// const conn = mongoose.createConnection(mongoURI);

//Init gfs - grid Stream
let gfs;

const conn = mongoose.connection;
conn.on("error", () => {
  console.log("> !!!error occurred from the database");
});
// conn.once("open", () => {
//   console.log("> !successfully opened the database");
// });
conn.once("open", () => {
  console.log("> !successfully opened the database");
  //Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

//create storage engine
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload = multer({ storage });

//@route GET /

app.get("/", (req, res) => {
  gfs.files.find().toArray((err, files) => {
    //Check if files
    if (!files || files.length === 0) {
      res.render("index", { files: false });
    } else {
      files.map((file) => {
        if (
          file.contentType === "image/jpeg" ||
          file.contentType === "image/png"
        ) {
          file.isImage = true;
        } else {
          file.isImage = false;
        }
      });
      res.render("index", { files: files });
    }
  });
});

//@route POST /upload
//@desc uploads file to DB
app.post("/upload", upload.single("file"), (req, res) => {
  res.json({ file: req.file });
  // res.redirect("/");
});

//@route GET / files
//@desc Display all files in JSON
app.get("/files", (req, res) => {
  gfs.files.find().toArray((err, files) => {
    //Check if files
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: "No file exist",
      });
    }

    //Files exist
    return res.json(files);
  });
});

app.get("/images", (req, res) => {
  gfs.files.find().toArray((err, files) => {
    //Check if files
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: "No file exist",
      });
    } else {
      files.map((file) => {
        if (
          file.contentType === "image/jpeg" ||
          file.contentType === "image/png"
        ) {
          file.isImage = true;
        } else {
          file.isImage = false;
        }
      });
      return res.json(files);
    }
  });
});

//@route GET /files/:filename
//@desc Display single file object
app.get("/files/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    //Check if files
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No file exist",
      });
    }
    //Files exist
    return res.json(file);
  });
});

//@route GET /image/:filename
//@desc Display image
app.get("/image/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    //Check if files
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No file exist",
      });
    }
    //Check if image
    if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
      //Read output to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: "Not an image",
      });
    }
  });
});

// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

// Line 1 and 2 is requiring Express and allows us to use it inside of our server.js file.
// Line 3 is setting the port that our Express server will be running on.
// Line 6 will simply console.log a message that will let us know our server is up and running.
// Line 9–11 is setting up a GET route that we will eventually be fetched from within our client side React application.
// Apply middleware

const postRoute = require("./routes/postRoute");
const prodRoute = require("./routes/prodRoute");

app.use("/posts", postRoute);
app.use("/prods", prodRoute);
