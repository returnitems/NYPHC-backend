const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  position: String,
  height: Number,
  weight: Number,
  shoots: String,
  birthplace: String,
  drafted: Number,
});

const Player = mongoose.model("Player", playerSchema);
module.exports = Player;