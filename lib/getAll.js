module.exports = function () {
  const result = [];

  const params = {
      TableName: table,
      Select: 'ALL_ATTRIBUTES'
  };

  return dynamodb.scan(params).promise().then(
    function(req) {
      result += '```\n';

      req.data.Items.forEach(function(val, idx){
        result += (val.id.S)+'\n';
      });

      return result += '```';
    },
    function(err) {
      return 'Error has occured.';
    }
  );
}
