const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/mongo', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3334);