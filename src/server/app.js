require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const pages = require('./routes/pages');
const api = require('./routes/api');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../../public')));
app.use('/api', api);
app.use('/', pages);

if (require.main === module) {
  mongoose.connect(process.env.MONGO_URI).catch((e) => console.error('Mongo:', e.message));
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log('HB-ECOM en http://localhost:' + port));
}
module.exports = app;
