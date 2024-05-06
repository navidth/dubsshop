"use server";
const mongoose = require("mongoose");
const {MongoDB} = require("../db/mongodb")
const subitemSchema = new mongoose.Schema({
  name: String,
  urlItems: String,
});

const categorySchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
  url: { type: String },
  subitems: [subitemSchema],
});

let Category;
try {
  Category = mongoose.model("Categorie");
} catch (error) {
  Category = mongoose.model("Categorie", categorySchema);
}

module.exports = { Category };
