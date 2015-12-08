var AWS = require('aws-sdk-promise');
var dynamodb = new AWS.DynamoDB();
var tableName = 'lgtm_bot';

module.exports = function(id) {
  var params = {
    TableName: tableName,
    Key: {
      id: {
        S: id
      }
    }
  };

  return dynamodb.getItem(params).promise().then(
    function(req) {
      return req.data.Item.url.S;
    },
    function(error) {
      return error;
    }
  );
};
