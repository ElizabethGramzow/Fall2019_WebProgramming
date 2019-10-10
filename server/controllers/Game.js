const express = require('express');
const users = require('../models/Users');
const app = express.Router();

const game = {
    users: [],
    pictureCards: [],
    quoteCards: [],
    dealer: 0
};

app.post('/join', (req, res) => {
    const userID = req.query.userID;
    game.users.push(users[userID]);
    res.send(users[userID]);
});

module.exports = app;