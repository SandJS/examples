"use strict";

const Sand = require('sand');
const Http = require('sand-http');

new Sand({
  log: '*'
})
  .use(Http)
  .start();