const Prod = require("../models/prodModel");
const express = require("express");
const router = express.Router();

//查询数据库所有数据
router.get("/", async (req, res) => {
  try {
    const Prods = await Prod.find();
    res.json(Prods);
  } catch (err) {
    res.json({ message: err });
  }
});
//添加数据
router.post("/", async (req, res) => {
  const prod = new Prod({
    prod_brand: req.body.prod_brand,
    prod_name: req.body.prod_name,
    prod_price: req.body.prod_price,
    prod_info: req.body.prod_info,
    prod_details: req.body.prod_details,
    prod_status: req.body.prod_status,
    prod_upload_date: req.body.prod_upload_date
  });
  try {
    const saveProd = await prod.save();
    res.json(saveProd);
  } catch (err) {
    res.json({ message: err });
  }
});
//查找对应id的数据
router.get("/:_id", async (req, res) => {
  try {
    const findProd = await Prod.findById(req.params._id);
    res.json(findProd);
  } catch (err) {
    res.json({ message: err });
  }
});
//删除数据
router.delete("/:_id", async (req, res) => {
  try {
    const removeProd = await Prod.remove({ _id: req.params._id });
    res.json(removeProd);
  } catch (err) {
    res.json({ message: err });
  }
});
//修改数据
router.patch("/:_id", async (req, res) => {
  try {
    const updateProd = await Prod.updateOne(
      { _id: req.params._id },
      { $set: { title: req.body.title } }
    );
    res.json(updateProd);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
