// Import the Express framework for building web applications
const express = require('express');
// Adjust the import path based on your project structure
const { Booking } = require('../models/User');
// Create a new router object to define routes
const router = express.Router();
// Define a POST route at the root of this router
router.post('/', async (req, res) => {
    // Destructure the request body to extract booking details
    const { name, email, phone, date, time, guests, bookingCode } = req.body;
    // Create a new booking instance using the Booking model
    const newBooking = new Booking({
        name,         
        email,        
        phone,        
        date,         
        time,        
        guests,       
        bookingCode  
    });
    try {
        // Save the new booking to the database asynchronously
        const savedBooking = await newBooking.save();
        // Send a success response with the saved booking data
        res.status(200).json(savedBooking);
    } catch (error) {
        // Send an error response if saving the booking fails
        res.status(500).json({ message: 'Failed to save booking', error });
    }
});
// Export the router so it can be used in other parts of the application
module.exports = router;
