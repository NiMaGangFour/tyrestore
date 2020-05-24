const mongoose = require("mongoose");
const PostSchema = mongoose.Schema({
  prod_brand: {
    type: String,
    required: true,
  },
  prod_name: {
    type: String,
    required: true,
  },
  prod_price: {
    type: Number,
    required: true,
  },
  prod_info: {
    type: String,
    required: true,
  },
  prod_details: {
    type: String,
    required: true,
  },
  prod_status: {
    type: String,
    enum: ["Available", "Sold Out"],
    required: true,
  },

  prod_upload_date: {
    type: Date,
    dafault: Date.now,
  },
  prod_image_id: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Products", PostSchema);
