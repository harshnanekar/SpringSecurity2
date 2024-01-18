const express = require('express').Router();
const controller = require('../controller/controller.js');

express.get('/dashboard',controller.getpage);
express.post('/insertdata',controller.insertdatas);
express.get('/insert',controller.insert);
express.get('/view',controller.view);
express.get('/delete/:id',controller.delete);
express.post('/update',controller.update);
express.post('/updated',controller.updated);
express.get('/getcookie',controller.getcookie);

module.exports = express;