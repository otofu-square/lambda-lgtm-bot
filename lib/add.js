const AWS       = require('aws-sdk-promise');
const dynamodb  = new AWS.DynamoDB();
const tableName = 'lgtm_bot';

module.exports = function(options) {
  if(options.length > 1) {
    var id  = options[0];
    var url = decodeURIComponent(options[1]);
  } else {
    var id  = generate_id();
    var url = decodeURIComponent(options[0]);
  }

  const params = {
    TableName: tableName,
    Item: {
      'id' : {'S': id},
      'url': {'S': url}
    }
  };

  return dynamodb.putItem(params).promise().then(
    function(req) {
      return 'Success.\n`ID: '+id+'`,\n`URL: '+url+'`';
    },
    function(err) {
      return 'Error has occured.';
    }
  );
}
