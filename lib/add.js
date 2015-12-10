var AWS = require('aws-sdk-promise');
var dynamodb = new AWS.DynamoDB({region: 'ap-northeast-1'});
var tableName = 'lgtm_bot';

module.exports = function(options) {
  var id = '';
  var url = '';

  if (options.length > 1) {
    id = options[0];
    url = decodeURIComponent(options[1]);
  } else {
    id = generate_id();
    url = decodeURIComponent(options[0]);
  }

  var params = {
    TableName: tableName,
    Item: {
      id: {
        S: id
      },
      url: {
        S: url
      }
    }
  };

  return dynamodb.putItem(params).promise().then(
    function() {
      return 'Success.\n`ID: ' + id + '`,\n`URL: ' + url + '`';
    },
    function(err) {
      return err;
    }
  );
};
