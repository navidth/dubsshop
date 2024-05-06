const mongoose = require("mongoose");
const {MongoDB} = require("../db/mongodb")
const detailedItemSchema = new mongoose.Schema({
  attr: String,
  value: String,
});

const bladesProductSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: String },
  images: { type: [String] },
  category: { type: String },
  brand: { type: String },
  subitems: { type: String },
  creationAt: { type: Date, default: Date.now },
  detailedItens: [detailedItemSchema],
  count: { type: Number },
  desceriptions: { type: String },
  src: { type: String },
});
let Blade;
try {
  Blade = mongoose.model("Blade");
} catch (e) {
  Blade = mongoose.model("Blade", bladesProductSchema);
}

module.exports = { Blade };
