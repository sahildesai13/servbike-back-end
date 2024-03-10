const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  ServiceType: String,
  ServiceName: String,
  Part: String,
  Price: Number
});

const SerdataSchema = new mongoose.Schema({
  emailid: String,
  model: [String],
  service: [ServiceSchema]
});

const SerdataModel = mongoose.model('user_services', SerdataSchema);

module.exports = SerdataModel;