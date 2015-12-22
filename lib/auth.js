module.exports = function(token) {
  if (token === process.env.SLACK_OUTGOING_WEBHOCKS_TOKEN) {
    return true;
  }
  return false;
};
