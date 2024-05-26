const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth.routes');
const dataRoutes = require('./routes/data.routes');

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);
app.use('/data', dataRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to My Cloud Run Project!');
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
