const express = require('express');         // Import the Express framework for building web applications
const mongoose = require('mongoose');       // Import Mongoose for interacting with MongoDB
const bodyParser = require('body-parser');  // Import body-parser middleware for parsing JSON request bodies
const cors = require('cors');               // Import cors middleware to allow cross-origin requests

// Import route handlers for different endpoints
const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const bookingRoute = require('./routes/booking');
const contactRoute = require('./routes/contact');

const app = express();    // Create an instance of an Express application
// Define the port for the server to listen on, using an environment variable or defaulting to 5000
const port = process.env.PORT || 5000;
app.use(bodyParser.json());// Use body-parser to parse incoming JSON requests
app.use(cors());    // Enable CORS to allow requests from different origins

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/MY_restaurant_DATA', {
  useNewUrlParser: true, // Use the new URL parser to avoid deprecation warnings
  useUnifiedTopology: true, // Use the new topology engine to avoid deprecation warnings
})
.then(() => console.log('MongoDB connected')) // Log success message if connected
.catch(err => console.log(err)); // Log error if connection fails

// Define routes for handling different API endpoints
app.use('/signup', signupRoute); // Route for user signup
app.use('/login', loginRoute); // Route for user login
app.use('/booking', bookingRoute); // Route for handling bookings
app.use('/contact', contactRoute); // Route for handling contact submissions

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`); // Log message when server is running
});
