const api = require('express').Router();

api.use('/auth', require('./auth'));
api.use('/post', require('./post'));
api.use('/upload', require('./upload'));
api.use('/team', require('./team'));
api.use('/member', require('./member'));

module.exports = api;
