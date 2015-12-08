const auth           = require('./lib/auth');
const requestHandler = require('./lib/requestHandler');

exports.handler = function(event, context) {
  const raw_data  = event.text.match(/(lgtm\:\s*)(.*)/)[2];
  const command   = raw_data.split('+')[0];
  const options   = raw_data.split('+').slice(1);
  const token     = event.token;

  // Authenticate by token
  if (auth(token)) {
    console.log(requestHandler(command, options, context));
    return requestHandler(command, options, context);
  } else {
    return context.done(null, {text: "Auth Error."});
  }
};
