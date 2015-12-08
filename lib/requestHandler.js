var ping = require('./ping');
var help = require('./help');
var getAll = require('./getAll');
var add = require('./add');
var get = require('./get');

module.exports = function(command, options) {
  switch (command) {
    case 'ping':
      return ping();
    case 'help':
      return help();
    case 'list':
      return getAll();
    case 'add':
      return add(options);
    case 'show':
      return get(options.toString());
    default:
      return 'No match.';
  }
};
