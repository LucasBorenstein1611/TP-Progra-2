const controller = {
    detalle: function (req, res) {
      let id = req.params.id;
      res.render('product', { id: id });
    },
  
    crear: function (req, res) {
      res.render('product-add');
    },
  
    buscar: function (req, res) {
      let termino = req.query.q;
      res.render('search-results', { busqueda: termino });
    }
  };
  
  module.exports = controller;
  