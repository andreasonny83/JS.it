'use strict';

const colori = [
  'rosso',
  'giallo',
  'verde',
  'blu',
];

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message:
        `Oggi mi sento di colore ${colori[Math.floor(Math.random() * 3) + 0]}`,
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
