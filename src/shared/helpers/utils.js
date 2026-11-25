module.exports = {
  eq: (a, b) => a === b,
  // Serializa estado para window.__STATE__ evitando romper el <script>
  json: (obj) => JSON.stringify(obj).replace(/</g, '\\u003c'),
};
