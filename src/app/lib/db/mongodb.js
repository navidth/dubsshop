"use server";
const mongoose = require("mongoose");
require("dotenv").config();
// Connect MongoDB at default port 27017.
const MongoDB = mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connection Succeeded.");
  })
  .catch((err) => {
    console.log("Error in DB connection: " + err);
  });
module.exports = {MongoDB};
