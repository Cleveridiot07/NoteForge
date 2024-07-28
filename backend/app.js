const express = require('express');
const cors = require('cors'); // Import cors package
const app = express();
const { errorHandler } = require('./middlewares/errorMiddleware');

const corsOptions = {
    origin: '*', // replace with your frontend URL
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST','PUT','DELETE'],     // Allow only these HTTP methods
    allowedHeaders: ['Content-Type','Authorization'], // Allow only these headers
    credentials: true             // Allow cookies and HTTP authentication headers
  };
  app.use(cors(corsOptions));


// Body parser middleware
app.use(express.json());

// Import routes
const authRoutes = require('./routes/authRoutes.js');
const notesRoutes = require('./routes/noteRoutes.js');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/notes', notesRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
