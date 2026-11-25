// M2: resuelve idioma por ?lang=, cookie o default.
module.exports = (req, res, next) => {
  req.lang = req.query.lang || (req.headers.cookie || '').match(/lang=(es|en)/)?.[1] || 'es';
  next();
};
