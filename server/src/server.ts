import express from 'express'
import { routes } from './routes';
const cors = require("cors")

var bodyParser = require('body-parser');
const app = express();

app.use(cors({
  origin: "https://nlw-return-impulse-omega-smoky.vercel.app/",
}))

app.use(express.json());
app.use(routes);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 });

 app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }));

app.listen(process.env.PORT || 3333, () => {
    console.log('HTTP server running!');
});
