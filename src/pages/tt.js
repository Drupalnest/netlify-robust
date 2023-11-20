// const express = require('express');
// const next = require('next');
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./public/swagger.json'); // Path to your Swagger definition

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = express();

//   server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//   server.all('*', (req, res) => {
//     return handle(req, res);
//   });

//   server.listen(3000, (err) => {
//     if (err) throw err;
//     console.log('> Ready on http://localhost:8000');
//   });
// });



// const express = require("express");
// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.json"); // This is the Swagger JSON file

// const app = express();

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// app.listen(8000, () => {
//   console.log("Server is running on http://localhost:3000");
// });


import React from 'react'

const tt = () => {
  return (
    <div>tt</div>
  )
}

export default tt