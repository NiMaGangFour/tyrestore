const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const crypto = require("crypto");
const mongoose = require("mongoose");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const methodOverride = require("method-override");

const app = express();

const postRoute = require("./routes/postRoute");
const prodRoute = require("./routes/prodRoute");

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

// const dbPath =
//   "mongodb+srv://dbUser:nCRo9dSrxTl3rBfg@cluster0-frk7s.mongodb.net/tyrestore_dev?retryWrites=true&w=majority";
// mongoose.connect(dbPath, {
//   useNewUrlParser: true,
// });

const mongoURI =
  "mongodb+srv://dbUser:nCRo9dSrxTl3rBfg@cluster0-frk7s.mongodb.net/tyrestore_dev?retryWrites=true&w=majority";
const conn = mongoose.createConnection(mongoURI);

//Init gfs
let gfs;

// const db = mongoose.connection;
conn.on("error", () => {
  console.log("> !!!error occurred from the database");
});
// conn.once("open", () => {
//   console.log("> !successfully opened the database");
// });
conn.once("open", () => {
  console.log("> !successfully opened the database");
  gfs = Grid(conn.db, mongoose.mongo);
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
app.use("/posts", postRoute);
app.use("/prods", prodRoute);

app.get("/i", (req, res) => {
  res.sender("index");
});
