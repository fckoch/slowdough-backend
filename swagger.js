const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Slowdough API',
    description: 'Slow Dough',
  },
  host: 'localhost:8080',
  schemes: ['http'],
  tags: [
    {
        "name": "Breads",
        "description": "Endpoints"
    }
  ],
  definitions: {
      Bread: {
          name: 'string',
          description: 'string',
          type: 'string',
      }
  }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app/routes/bread.routes.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);