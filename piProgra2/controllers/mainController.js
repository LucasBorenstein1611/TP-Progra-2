const data = require('../db/data');

const controller = {
    index: function (req, res) {
      res.render('index');
    },
  
    login: function (req, res) {
      res.render('login');
    },
  
    register: function (req, res) {
      res.render('register');
    }
  };
  
  module.exports = controller;
  