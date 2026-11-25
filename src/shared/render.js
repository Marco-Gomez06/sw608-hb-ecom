// M2: render único. Usa plantillas precompiladas tanto en Node como en navegador.
module.exports = function render(Handlebars, templateName, context) {
  const tpl = Handlebars.templates[templateName];
  if (!tpl) throw new Error(`Plantilla no precompilada: ${templateName}`);
  return tpl(context);
};
