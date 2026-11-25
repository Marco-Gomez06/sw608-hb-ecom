// M1: registro único de helpers, compartido por servidor y navegador.
const money = require('./money');
const timeAgo = require('./timeAgo');
const stars = require('./stars');
const truncate = require('./truncate');
const stockBadge = require('./stockBadge');
const { eq, json } = require('./utils');

module.exports = function registerHelpers(Handlebars, i18n) {
  Handlebars.registerHelper({ money, timeAgo, stars, truncate, stockBadge, eq, json });
  Handlebars.registerHelper('t', function (key, options) {
    return i18n.t(options.data.root.lang, key);
  });
};
