const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static('public'));

app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// log mongo queries being executed
mongoose.set('debug', true);

app.use(require('./routes'));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));

/* TO-DO:
- CONTROLLERS: need functions to add/remove friends to users and reactions to thoughts
- MODELS: need to finish models w friends and reactions
*/

// WHEN I test API POST and DELETE routes in Insomnia
// THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
