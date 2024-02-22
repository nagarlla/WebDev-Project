const express = require('express');
const router = express.Router();
const Seat = require('../Model/seat1.model');

// Get list of available seats
router.get('/seats', async (req, res) => {
  try {
    const seats = await Seat.find({ isBooked: false });
    res.json(seats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Book a seat
router.post('/book/:seatNumber', async (req, res) => {
  const seatNumber = parseInt(req.params.seatNumber);
  try {
    const seat = await Seat.findOneAndUpdate(
      { seatNumber, isBooked: false },
      { $set: { isBooked: true } },
      { new: true }
    );
    if (seat) {
      res.json({ success: true, message: `Seat ${seat.seatNumber} booked successfully` });
    } else {
      res.status(400).json({ success: false, message: 'Seat is already booked or does not exist' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;