const mongoose = require("mongoose");
const {MongoDB} = require("../db/mongodb")

const userSchema = new mongoose.Schema({
  nameUser: { type: String },
  phone_number: { type: String },
  password: { type: String },
  date: { type: Date, default: Date.now },
  address: [
    {
      state: { type: String, default: "" },
      city: { type: String, default: "" },
      postal_code: { type: String, default: "" },
      full_address: { type: String, default: "" },
    },
  ],
  favoriteProducts: [
    {
      name: { type: String },
      price: { type: String },
      brand: { type: String },
      image: { type: String },
      link: { type: String },
    },
  ],
});

let User
try {
  User = mongoose.model("User");
} catch (error) {
  User = mongoose.model("User", userSchema);
}

module.exports = { User };
