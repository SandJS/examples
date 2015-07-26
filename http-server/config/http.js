module.exports = {
  /**
   * The all environment is the base config object of all environments
   */
  all: {
    port: 9999
  },

  /**
   * Uncommenting this key, would ensure that when NODE_ENV=production, the `http` server starts on port 9998
   *

  production: {
    port: 9998
  }
  */
};