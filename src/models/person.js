let mongoose = require("mongoose");

let personSchema = new mongoose.Schema({
  name: { type: String, required: true }, //required
  age: Number,
  favoriteFoods: Array, //array of strings
});

module.exports = mongoose.model("Person", personSchema);
