const data = require('../db/data');
const usuario = data.usuario;

const profileController = {
  index: function (req, res) {
    res.render('profile', {
      usuario: usuario
    });
  }
};

module.exports = profileController;

  