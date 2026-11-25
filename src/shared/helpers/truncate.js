// "Seguro": recibe texto plano y devuelve texto plano (Handlebars lo escapa).
module.exports = function truncate(text = '', len = 100) {
  return text.length > len ? text.slice(0, len).trimEnd() + '…' : text;
};
