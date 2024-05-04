"use server"
const mongoose = require('mongoose')
const {clientPromise} = require('../db/mongodb')

const accessorySchema = new mongoose.Schema({
      name: { type: String },
      price: { type: String },
      category: { type: String },
      creationAt: { type: Date, default: Date.now },
      count: { type: Number },
      brand:{type:String},
      desceriptions: { type: String },
      src: { type: String },
    });
let AccessoryProduct
try {
  AccessoryProduct = mongoose.model("Accessorie")
} catch (error) {
  AccessoryProduct =mongoose.model("Accessorie", accessorySchema)
}

module.exports = {AccessoryProduct}