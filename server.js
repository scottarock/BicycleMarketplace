const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();

const sessionConfig = {
  saveUninitialized: true,
  secret: 'sessionSecret',
  resave: false,
  name: 'session',
  rolling: true,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 360000
  }
};

require('./server/config/database');

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(logger('dev'))
  .use(function(request, response, next) {
    // simple custom middleware to report requests
    console.log(`incoming request for ${request.url}`);
    next();
  })
  .use(express.static(path.join(__dirname, 'dist/public')))
  .use(session(sessionConfig))
  .use(cookieParser('sdklfhjkdjquy'))
  .use('/api', require('./server/routes'))
  .use(require('./server/routes/catch-all.routes'))
  .listen(port, () => { console.log(`server listening on port ${port}`) });
