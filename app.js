//Step 1: Create project 'yarn init'
//Step 2: Add Express package `yarn add Express`
//Step3: create app.js
//Step4: require express in app.js
//Step5: Create a get route to server `/helloWorld`
//Step6:


const express = require('express');
const logger = require('morgan');
const app = express();


//unlike app.get, app.use will work for all HTTP verbs
//if we do not give a URL for the first argument, it will match for every URL
// app.use((request, response, next) =>{
//   console.log(`✨${request.method} - ${request.path} ${new Date().toString()}`);
//   next();//next, a function and third argument of a middleware callback,
//   //tells Express  to move on to the next middleware
// })

app.use(logger('dev'));


//URL: http://localhost:4545/helloWorld VERB: Get
//request & response names are just variables; can be renamed; what matters is the order; the first one will always be the request
app.get('/helloWorld', (request, response) =>{

  //the arguments passed to this callback are in order: request, response &  next
  // - requet is an object that contains the entire messsage from the client (usually a browser)
  // - response is an object that contains the message our server will reply with to the client

  response.send('Hello World!')
})



const PORT = 4545;
app.listen(
  PORT,
  () => {console.log(`Server listening on http://localhost:${PORT}`);}
);
