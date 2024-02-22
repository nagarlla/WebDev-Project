// const mongoose = require('mongoose');

// const seatSchema = new mongoose.Schema({
//   seatNumber: Number,
//   isBooked: Boolean,
// });

// module.exports = mongoose.model('Seat', seatSchema);

const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
  name: String,
  isBooked: Boolean,
});

module.exports = mongoose.model('Seat', seatSchema);