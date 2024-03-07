// models/Service.js
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  serviceName: { type: String, required: true },
  serviceType: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('Services', serviceSchema);
