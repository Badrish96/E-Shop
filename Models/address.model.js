////File for schema of address model

const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },
  userId: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: "User",
  },
});

module.exports = mongoose.model("Address", addressSchema);
