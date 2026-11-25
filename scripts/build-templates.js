// M1: precompila .hbs -> public/js/templates.js (no se compila en runtime).
const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

const viewsDir = path.join(__dirname, '../src/views');
const out = ['(function(){var T=Handlebars.templates=Handlebars.templates||{};'];

for (const dir of ['templates', 'partials']) {
  for (const file of fs.readdirSync(path.join(viewsDir, dir))) {
    const name = path.basename(file, '.hbs');
    const src = fs.readFileSync(path.join(viewsDir, dir, file), 'utf8');
    const spec = Handlebars.precompile(src);
    out.push(dir === 'partials'
      ? `Handlebars.partials['${name}']=Handlebars.template(${spec});`
      : `T['${name}']=Handlebars.template(${spec});`);
  }
}
out.push('})();');
fs.mkdirSync(path.join(__dirname, '../public/js'), { recursive: true });
fs.writeFileSync(path.join(__dirname, '../public/js/templates.js'), out.join('\n'));
console.log('Plantillas precompiladas en public/js/templates.js');
