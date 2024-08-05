const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connessione a MongoDB
mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true, useUnifiedTopology: true });

const orderSchema = new mongoose.Schema({
  items: Array,
  table: String
});

const Order = mongoose.model('Order', orderSchema);

app.post('/orders', async (req, res) => {
  const newOrder = new Order(req.body);
  await newOrder.save();
  res.status(201).send(newOrder);
});

app.get('/orders', async (req, res) => {
  const orders = await Order.find();
  res.status(200).send(orders);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
