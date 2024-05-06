const mongoose = require("mongoose");
const {MongoDB} = require("../db/mongodb")

const clothingsProductSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: String },
  color: { type: [String] },
  size: { type: [String] },
  count: { type: Number },
  images: { type: [String] },
  category: { type: String },
  subitems: { type: String },
  desceriptions: { type: String },
  src: { type: String },
  creationAt: { type: Date, default: Date.now },
});

let ClothingsProduct;
try {
  ClothingsProduct = mongoose.model("Clothing");
} catch (error) {
  ClothingsProduct = mongoose.model("Clothing", clothingsProductSchema);
}
module.exports = { ClothingsProduct };
