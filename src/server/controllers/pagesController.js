// Los controladores no generan HTML: arman el contexto y delegan en render (DSL).
const stub = (name) => (req, res) => res.send(`TODO: render de "${name}" con Handlebars`);
module.exports = {
  home: stub('home'), catalog: stub('catalog'), product: stub('product'),
  cart: stub('cart'), checkout: stub('checkout'),
};
