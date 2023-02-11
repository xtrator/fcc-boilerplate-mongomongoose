let mongoose = require("mongoose");

let personSchema = new mongoose.Schema({
  name: { type: String, required: true }, //required
  age: Number,
  favoriteFoods: Array, //array of strings
});

personSchema.methods.getInitials = function () {
  return this.name[0];
};

personSchema.statics.getUsers = function () {
  return new Promise((resolve, reject) => {
    this.find((err, docs) => {
      if (err) {
        console.error(err);
        return reject(err);
      }

      resolve(docs);
    });
  });
};

module.exports = mongoose.model("Person", personSchema);
