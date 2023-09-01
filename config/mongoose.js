// Connect to MongoDB
const mongoose = require('mongoose'); 

const dbURI = 'mongodb+srv://facebook:facebook@facebook.olwmveb.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI)
  .then((result) => console.log('connected to the db'))
  .catch((err) => console.log(err)
);