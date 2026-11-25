const router = require('express').Router();
router.get('/products', (req, res) => res.json({ todo: 'M3: listar productos (JSON para el cliente)' }));
router.get('/cart', (req, res) => res.json({ todo: 'M4: carrito' }));
router.post('/checkout', (req, res) => res.json({ todo: 'M4: checkout simulado' }));
module.exports = router;
