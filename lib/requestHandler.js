const ping    = require('./ping');
const help    = require('./help');
const getAll  = require('./getAll');
const add     = require('./add');
const show    = require('./get');

module.exports = function (command, options, context) {
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
}
