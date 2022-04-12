require("dotenv").config();

const express = require("express");
const bodyParser = require('body-parser');
const errorsMiddleware = require('./middlewares/errors');
const apiRouter = require('./routes/api');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/', apiRouter);
app.use(errorsMiddleware);

const PORT = process.env.NODE_DOCKER_PORT || 8080;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}.`);
});
