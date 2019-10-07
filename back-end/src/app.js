'use strict';

const express = require('express');
const cors = require('cors');

const app = express();

const foodRouter = require('./routers/food-route');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(foodRouter);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`server is up on ${port}`);
    });
  },
};
