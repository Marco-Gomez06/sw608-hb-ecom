// M2: i18n compartido. En servidor carga los JSON; en cliente recibe los diccionarios.
const dictionaries = {};
module.exports = {
  load(lang, dict) { dictionaries[lang] = dict; },
  t(lang, key) {
    const dict = dictionaries[lang] || {};
    return key.split('.').reduce((o, k) => (o ? o[k] : undefined), dict) ?? key;
  },
};
