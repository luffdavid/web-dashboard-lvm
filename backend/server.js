
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const homeRoute = require('./routes/home');
const PORT= 5000;
// Middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    console.log(req.path, req.method);
    next();
  });

// routes
app.use('/', homeRoute.router)

// connect to db
mongoose.connect("mongodb+srv://ADMIN:ADMIN@projectweb.98ouhea.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })