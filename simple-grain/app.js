"use strict";

const Sand = require('sand');
const Cheese = require('./Cheese');

const app = new Sand({log: '*'})
  .use(Cheese)
  .start(function () {
    let val = app.cheese.jusEatinMyCheese();
    app.log(val);
  });