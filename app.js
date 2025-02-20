const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const vehicleRoutes = require('./app/routes/vehicleRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/vehicles', vehicleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
