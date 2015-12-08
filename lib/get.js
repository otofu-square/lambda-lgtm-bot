module.exports = function (id) {
  const params = {
    TableName: table,
    Key: {
      'id': {'S': id}
    }
  };

  return dynamodb.getItem(params, function(err, res){}).promise().then(
    function(req) {
      result = req.data.Item.url.S;
    },
    function(error) {
      result = 'Error has occured.';
    }
  );
}
