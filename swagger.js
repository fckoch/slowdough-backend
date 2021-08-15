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
      AddBread: {
        name: 'string',
        description: 'string',
        type: 'string',
      },
      Bread: {
        uuid: '00000000-0000-0000-0000-000000000000',
        name: 'string',
        description: 'string',
        type: 'string',
        createdAt: 'Date',
        upatedAt: 'Date'
      }
  }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app/routes/bread.routes.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);