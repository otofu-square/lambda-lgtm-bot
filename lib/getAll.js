var AWS = require('aws-sdk-promise');
var dynamodb = new AWS.DynamoDB();
var tableName = 'lgtm_bot';

module.exports = function() {
  var result = [];

  var params = {
    TableName: tableName,
    Select: 'ALL_ATTRIBUTES'
  };

  return dynamodb.scan(params).promise().then(
    function(req) {
      result += '```\n';

      req.data.Items.forEach(function(val) {
        result += (val.id.S) + '\n';
      });

      result += '```';

      return result;
    },
    function(err) {
      return err;
    }
  );
};
