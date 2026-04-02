const mongoose = require("mongoose");
const { type } = require("node:os");
const { describe } = require("node:test");

const foodShcema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  description:{
    type: String,
  },
  foodPartner: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"foodpartner"
  }
});

const foodModel = mongoose.model("food", foodShcema);
module.exports = foodModel;
