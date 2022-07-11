const {
    model,
    Schema,
    Schema: {
      Types: { ObjectId },
    },
  } = require("mongoose");
  
  const schema = new Schema({
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    boobs: {
      type: Number,
      default: "",
    },
    hair: {
      type: String,
      default: "",
    },
    imageUrl: {
      type: String,
      default: "",
    },
    age: {
      type: Number,
      default: "",
    },
    active: {
      type: Boolean,
      default: true,
    },
    link: {
      type: String,
      default: "",
    },
  });
  
  module.exports = model("Product", schema);