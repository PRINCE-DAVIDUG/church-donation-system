require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const donationRoutes = require('./routes/donationRoutes');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'));

app.use('/api/donations', donationRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});