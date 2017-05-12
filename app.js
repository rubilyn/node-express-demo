// Step 1: Create project `yarn init`
// Step 2: Add Express package `yarn add express`
// Step 3: Create `app.js` file
// Step 4: Require Express in `app.js`
// Step 5: Create a get route to server `/helloWorld`
// Step 6: Have server listen on PORT

// require is a function that's part of node that is
// use load modules. it returns the object exported by
// the module.
const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const home = require('./routes/home');

const app = express();

// Configure Express app to use the ejs templating engine for our app's views
app.set('view engine', 'ejs');

// unline app.get, app.use will work for all HTTP Verbs
// if we do not give a URL for the first argument, it will match for every
// URL
/*
app.use((request, response, next) => {
  console.log(`ð${request.method} âÂ ${request.path} â ${new Date().toString()}`);
  next(); // next, a function and third argument of a middleware callback,
  // tells Express to move on to the next middleware
});
*/
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
// ð bodyParser.urlencoded will return middleware that will
// transform the raw data of the request into a javascript object
// that will be assigned to req.body
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use((req, res, next) => {
  const {cookies} = req;
  // ð equivalent to ð const cookies = req.cookies;
  // cookies.fullName // returns 'Cersei Lannister'
  // cookies.things[0]
  console.log('ðª', cookies);
  next();
});

app.use('/', home);

// URL: http://localhost:4545/helloWorld VERB: Get
app.get('/helloWorld', (request, response) => {
  // This callback (which receives a request & response) is usually named
  // Middleware
  // The arguments passed to this callback are in order: request, response & next
  // - request is an object that contains the entire message from the client (usually
  //   a browser)
  // - response is an object that contains the message our server will reply with
  //   to the client
  response.send('Hello World!');
});

// URL: http://localhost:4545/ VERB: Get
/*
app.get('/', (request, response) => {
  // use the response.render instead response.send when you want to
  // show a view from yours views folder
  response.render('index');
});
*/

const PORT = 4545;
app.listen(
  PORT,
  () => { console.log(`ð» Server listening on http://localhost:${PORT}`); }
);
