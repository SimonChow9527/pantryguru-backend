const { ExportStatus } = require("@aws-sdk/client-dynamodb");
const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");

exports.handler = async (event) => {
  const input = {
    TableName: `${event.userID}-active`,
    Item: {
      itemID: { S: event.itemID },
      createdOn: { S: event.createdOn },
      name: { S: event.name },
      brand: { S: event.brand },
      price: { S: event.price },
      purchasedFrom: { S: event.purchasedFrom },
      inMy: { S: event.inMy },
      expireDate: { S: event.expireDate },
      quantity: { S: event.quantity },
      comment: { S: event.comment },
    },
  };
  const client = new DynamoDBClient({ region: "ap-southeast-2" });
  const command = new PutItemCommand(input);
  const response = await client.send(command);
  return response;
};
