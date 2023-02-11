let mongoose = require("mongoose");

let personSchema = new mongoose.Schema({
  name: String, //required
  age: Number,
  favoriteFoods: Array, //array of strings
});

module.exports = mongoose.model("Person", personSchema);
