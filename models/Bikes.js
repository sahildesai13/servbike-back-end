// models/Bike.js
const mongoose = require('mongoose');

const bikeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
});

module.exports = mongoose.model('bikes', bikeSchema );
