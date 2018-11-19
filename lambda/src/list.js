"use strict";

const AWS = require("aws-sdk"); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.get = (event, context, callback) => {
  const params = {
    TableName: "wunderPantryList",
    Key: {
      id: "munhunger"
    }
  };

  dynamoDb.get(params, (error, result) => {
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 404,
        headers: { "Content-Type": "text/plain" },
        body: "Couldn't fetch the list."
      });
      return;
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Item).items
    };
    callback(null, response);
  });
};
