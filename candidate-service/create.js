const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
  accessKeyId:"AKIAWSYWHDOENMF4BM5D",
  secretAccessKey:"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"
});

const DynamoDB = new AWS.DynamoDB();

function createUser(req, res){
    const params = {
        TableName: "Movies",
        KeySchema: [{ AttributeName: "title", KeyType: "HASH" }],
        AttributeDefinitions: [{ AttributeName: "title", AttributeType: "S" }],
        ProvisionedThroughput: {
          ReadCapacityUnits: 10,
          WriteCapacityUnits: 10,
        },
      };
    
      DynamoDB.createTable(params, function(err, data) {
        if (err) {
          console.error("Unable to create table", err);
        } else {
          console.log("Created table", data);
        }
      })
}

module.exports = createUser;