'use strict';

const express = require('express');
const foodRouter = express.Router();
const uuid = require('uuid/v4');

let foods = [
  {name: 'sushi', amount: '10', id: uuid()},
  {name: 'durian', amount: '1', id: uuid()},
  {name: 'clams', amount: '20', id: uuid()},
  {name: 'oysters', amount: '5', id: uuid()},
];

foodRouter.get('/foods', (req, res) => {
  res.status(200).json(foods);
});

foodRouter.post('/foods', (req, res) => {
  req.body.id = uuid();
  foods.push(req.body);
  res.status(200).json(foods);
});

foodRouter.patch('/foods/:id', (req, res) => {
  foods = foods.map((food) => {
    if(food.id === req.params.id){
      Object.keys(food).forEach(key=>{
        food[key] = req.body[key];
        food.id = req.params.id;
      })
      return food;
    }
    return food;
  });
  res.status(200).json(foods);
});

foodRouter.delete('/foods/:id', (req, res) => {
  foods = foods.filter(food => {
    return food.id !== req.params.id;
});
  res.status(200).json(foods);
});

module.exports = foodRouter;
