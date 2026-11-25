const router = require('express').Router();
const pages = require('../controllers/pagesController');
router.get('/', pages.home);
router.get('/productos', pages.catalog);
router.get('/productos/:slug', pages.product);
router.get('/carrito', pages.cart);
router.get('/checkout', pages.checkout);
module.exports = router;
