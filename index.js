var auth           = require('./lib/auth');
var requestHandler = require('./lib/requestHandler');

exports.handler = function(event, context) {
  var raw_data  = event.text.match(/(lgtm\:\s*)(.*)/)[2];
  var command   = raw_data.split('+')[0];
  var options   = raw_data.split('+').slice(1);
  var token     = event.token;

  // Authenticate by token
  if (auth(token)) {
    console.log(requestHandler(command, options, context));
    return requestHandler(command, options, context);
  } else {
    return context.done(null, {text: "Auth Error."});
  }
};
