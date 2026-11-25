const Handlebars = require('handlebars');
const tpl = Handlebars.compile('{{#each reviews}}<li><b>{{author}}</b>: {{comment}}</li>{{/each}}');
console.log(tpl({ reviews: [{ author: 'Ana', comment: "<img src=x onerror=alert('XSS')>" }] }));
