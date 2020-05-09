import bodyParser from 'body-parser';
import express from 'express';
import routes from './routes';

const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(routes);
module.exports = app;
