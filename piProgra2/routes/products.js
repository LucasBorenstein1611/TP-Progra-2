const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/:id", productController.detalle);
router.get("/crear", productController.crear);
router.get("/buscar/:termino", productController.buscar);

module.exports = router;
