const Prod = require("../models/prodModel");
const express = require("express");
const router = express.Router();

const path = require("path");
const crypto = require("crypto");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");

// const UIProUploadForm = require("../src/components/UI/UIProUploadForm");

//查询数据库所有数据
router.get("/", async (req, res) => {
  try {
    const Prods = await Prod.find();
    res.json(Prods);
  } catch (err) {
    res.json({ message: err });
  }
});

// Mongo URI
//mongodb+srv://dbUser:<password>@cluster0-frk7s.mongodb.net/test?retryWrites=true&w=majority
const mongoURI =
  "mongodb+srv://dbUser:nCRo9dSrxTl3rBfg@cluster0-frk7s.mongodb.net/tyrestore_dev?retryWrites=true&w=majority";

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
  // console.log(res);
  // res.send("<p>some html</p>");
  res.status(200).send(req.file);
  //   res.status(201).send(res.file);
  //   res.render("index", { file: req.file });
  //   const prod = res.file;
  //   const saveProd = await prod.save();
  //   res.json(saveProd);

  //   res.send("hello world");

  //   res.json({ file: req.file });
  //   res.send(true);
  //   res.send(UIProUploadForm({ file: req.file }));
});

module.exports = router;
