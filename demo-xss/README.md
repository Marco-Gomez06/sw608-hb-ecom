# Demo XSS (criterio de éxito del DSL)
`vulnerable.html`: lista de reseñas con `innerHTML` / template literals (explotable).
`render.js`: la misma lista con Handlebars (escape automático).
Payload de prueba: `<img src=x onerror=alert('XSS')>`
