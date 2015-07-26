"use strict";

const SandGrain = require('sand-grain');

class Cheese extends SandGrain {

  constructor() {
    super();
    this.name = 'cheese'; // the logging name
    this.configName = 'cheese'; // the name of its configuration file
    this.defaultConfig = {cheese: 'white cheddar'}; // a default config object when no config is specified
    this.version = require('./package').version; // sets the grain's version
  }

  init(config, done) {
    super.init(config); // this must be called

    // configure your grain here
    // `this.config` holds the config object for this grain

    this.log(`I'm initializing! :D`);
    done(); // indicates that this grain is done initializing
  }

  shutdown(done) {
    this.log(`I'm shutting down! :(`);
    // do shutdown stuff here (i.e. close the server gracefully, etc)
    done();
  }

  jusEatinMyCheese() {
    this.log(`Jus' eatin' my ${this.config.cheese}!`);
    return 'ok? ok!';
  }
}

module.exports = Cheese;