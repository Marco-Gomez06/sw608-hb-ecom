const Handlebars = require('handlebars');
module.exports = function stockBadge(stock) {
  const [cls, label] = stock === 0 ? ['out', 'Agotado'] : stock < 5 ? ['low', 'Últimas unidades'] : ['ok', 'En stock'];
  return new Handlebars.SafeString(`<span class="badge badge--${cls}">${label}</span>`);
};
