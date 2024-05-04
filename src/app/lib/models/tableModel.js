const mongoose = require("mongoose");
const {clientPromise} = require('../db/mongodb')
const detailedItemSchema = new mongoose.Schema({
  attr: String,
  value: String,
});

const tableBallProductSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: String },
  category: { type: String },
  brand: { type: String },
  subitems: { type: String },
  detailedItens: [detailedItemSchema],
  images: { type: [String] },
  count: { type: Number },
  desceriptions: { type: String },
  src: { type: String },
  creationAt: { type: Date, default: Date.now },
});
let TableBall;
try {
  TableBall = mongoose.model("TableBall");
} catch (error) {
  TableBall = mongoose.model("TableBall", tableBallProductSchema);
}
module.exports = { TableBall };
