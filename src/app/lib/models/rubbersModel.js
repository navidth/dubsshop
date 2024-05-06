const mongoose = require("mongoose");
const {MongoDB} = require("../db/mongodb")

const detailedItemSchema = new mongoose.Schema({
  attr: String,
  value: String,
});

const rubbersProductSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: String },
  images: { type: [String] },
  category: { type: String },
  brand: { type: String },
  subitems: { type: String },
  count: { type: Number },
  color: { type: [String] },
  detailedItens: [detailedItemSchema],
  desceriptions: { type: String },
  src: { type: String },
  creationAt: { type: Date, default: Date.now },
});

let Rubbers;
try {
  Rubbers = mongoose.model("Rubber");
} catch (error) {
  Rubbers = mongoose.model("Rubber", rubbersProductSchema);
}
module.exports = { Rubbers };
