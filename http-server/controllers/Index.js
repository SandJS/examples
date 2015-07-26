"use strict";

const Controller = require('sand-http').Controller;

/**
 * This is a simple http Controller in the MVC paradigm.
 */
class Index extends Controller {

  /**
   * This is a simple controller Action.
   * NOTE: ALL actions must be 1) `static` and 2) GeneratorFunction
   */
  static *index() {

    /**
     * `this` is an instance of the `require('sand-http').Context` class. The `Context` class
     * holds references to `req` and `res` from Express.js (i.e. `this.req` or `this.res`. As a convenience,
     * several of the req and res functions have been aliased onto the `Context` object. In the example below,
     * the `status` function is the same one as in Express.js `req.status(200).send('...');`
     *
     *
     * At this point, some of you may be wondering, "OK, so a Controller is an ES6 `class` where Actions are
     * `static GeneratorFunction`s and `this` isn't even an instance of the class?!"
     * Yes, you understood correctly...
     * And yes, it's a little weird by comparison to classes in other languages :)
     */
    this.status(200).send('Hello, World!');
  }

}

module.exports = Index;