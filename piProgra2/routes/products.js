const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.detalle);
router.get("/login", productController.crear);
router.get("/register", productController.busqueda);

module.exports = router;
