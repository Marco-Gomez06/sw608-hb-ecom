const Handlebars = require('handlebars');
module.exports = function stars(rating = 0) {
  const n = Math.max(0, Math.min(5, Math.round(rating)));
  return new Handlebars.SafeString('★'.repeat(n) + '☆'.repeat(5 - n));
};
