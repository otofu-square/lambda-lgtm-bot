var auth = require('./lib/auth');
var requestHandler = require('./lib/requestHandler');

exports.handler = function(event, context) {
  var rawData = event.text.match(/(lgtm\:\s*)(.*)/)[2];
  var command = rawData.split('+')[0];
  var options = rawData.split('+').slice(1);
  var token = event.token;

  // Authenticate by token
  if (auth(token)) {
    requestHandler(command, options, context).then(
      function(req) {
        context.done(null, {text: req});
      },
      function(err) {
        context.done(null, {text: err});
      }
    );
  } else {
    context.done(null, {text: 'Auth Error.'});
  }
};
