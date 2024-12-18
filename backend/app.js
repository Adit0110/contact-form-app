/*const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const contactRoutes = require('./routes/contact');

const app = express();
app.use(cors());
app.use(express.json());

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error(err));

mongoose.connect('your_mongodb_connection_string', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));


//app.use('/api/contact', contactRoutes);
app.post('/api/contact', (req, res) => {
    console.log(req.body); // Log the incoming data
    try {
        // Your logic to save the data in MongoDB
        res.status(200).json({ message: 'Form submitted successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to submit contact form' });
      }
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));*/


/*const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
//mongoose.connect('sf', { useNewUrlParser: true, useUnifiedTopology: true })
// Remove `useNewUrlParser` and `useUnifiedTopology`
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/sf');

  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));
  

  
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Contact form submission route
app.post('/api/contact', async (req, res) => {
  try {
    // Logic to save data in MongoDB goes here
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to submit contact form' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});*/


// Import required modules
/*const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Initialize Express app
const app = express();
app.use(cors()); // Enable CORS
app.use(bodyParser.json());
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/contactFormDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Define Mongoose schema and model for Contact Form
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String
});

const Contact = mongoose.model('Contact', contactSchema);

// API endpoint to handle form submissions
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Create a new contact document
    const contact = new Contact({
      name,
      email,
      phone,
      message
    });

    // Check if an entry with the same details already exists
    const existingContact = await Contact.findOne({ name, email, phone, message });
    if (existingContact) {
      return res.status(400).json({ message: 'You have already submitted this form' });
    }

    // If no matching entry, create a new one
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    // Save the document to MongoDB
    await contact.save();
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to submit contact form' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});*/



// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Initialize Express app
const app = express();
app.use(cors()); // Enable CORS
app.use(bodyParser.json());
const PORT = 3000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/contactFormDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Define Mongoose schema and model for Contact Form
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String
});

const Contact = mongoose.model('Contact', contactSchema);

// API endpoint to handle form submissions
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Check if an entry with the same details already exists
    const existingContact = await Contact.findOne({ name, email, phone, message });
    if (existingContact) {
      return res.status(400).json({ message: 'You have already submitted this form' });
    }

    // If no matching entry, create a new one
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to submit contact form' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
