const data = require('../db/data');
const usuario = data.usuario;

const controller = {
    detalle: function (req, res) {
      let id = req.params.id;
      res.render('product', { id: id });
    },
  
    crear: function (req, res) {
      res.render('product-add', {
        usuario: usuario
      });
    },
  
    buscar: function (req, res) {
      let termino = req.params.termino;
      res.render('search-results', { busqueda: termino });
    }
  };

module.exports = controller;
