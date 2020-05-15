const Prod = require("../models/prodModel");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const path = require("path");
const crypto = require("crypto");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
// const UIProUploadForm = require("../src/components/UI/UIProUploadForm");

// Mongo URI
//mongodb+srv://dbUser:<password>@cluster0-frk7s.mongodb.net/test?retryWrites=true&w=majority
const mongoURI =
  "mongodb+srv://dbUser:nCRo9dSrxTl3rBfg@cluster0-frk7s.mongodb.net/tyrestore_dev?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
});

//Init gfs - grid Stream
let gfs;

const conn = mongoose.connection;

conn.once("open", () => {
  //Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
  console.log("> ! gfs.collection ready <");
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

//----------API----------
//@route GET
//@desc get all files to from DB
router.get("/", async (req, res) => {
  try {
    const Prods = await Prod.find();
    res.json(Prods);
  } catch (err) {
    res.json({ message: err });
  }
});

//@route POST /upload
//@desc uploads file to DB
router.post("/", upload.single("file"), async (req, res) => {
  //Check if files
  if (!req.file || req.file.length === 0) {
    return res.status(404).json({
      err: "No file exist",
    });
  }
  console.log(req.file);
  res.status(200).send(req.file);
});

//@route GET / files
//@desc Display all files in JSON (inlcude no image files)
router.get("/files", (req, res) => {
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

//@desc list all file
//@desc Display all image files in JSON
router.get("/images", (req, res) => {
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
router.get("/files/:filename", (req, res) => {
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
router.get("/image/:filename", (req, res) => {
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

//@route DELETE /image/:id
//@desc delete image with id
router.delete("/image/:id", (req, res) => {
  gfs.remove({ _id: req.params.id, root: "uploads" }, (err, gridStore) => {
    if (err) {
      return res.status(404).json({ err: err });
    }
    console.log(res);
    res.status(200).send(req.file);
  });
});

module.exports = router;
