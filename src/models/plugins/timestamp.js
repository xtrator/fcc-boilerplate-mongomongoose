module.exports = function timestamp(schema) {
  // add the two fields to the schema
  schema.add({
    createdAt: Date,
    updatedAt: Date,
  });

  //Create a pre-save hook
  schema.pre("save", function (next) {
    let now = Date.now();
    this.updatedAt = now;
    if (!this.createdAt) {
      this.createdAt = now;
    }

    // call next function
    next();
  });
};
