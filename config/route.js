const express = require('express');
const route = express.Router();
const feedController = require('../controller/feedController');

route.get('/feed', feedController.getFeed);
route.post('/new-feed', feedController.createNewFeed);

route.get('/feed/:id', feedController.getFullMessage);
route.post('/delete-message/:id', feedController.deleteMessage);

route.get('/feed/edit/:id', feedController.getEditPage);
route.post('/feed/edit/:id', feedController.updateFeed);

module.exports = route;