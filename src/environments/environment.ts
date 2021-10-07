const userHost = 'http://localhost:8080';
const common = require('./common');

const env = {
  production: false,
  userHost: userHost,
  ...common
};

module.exports = env;
