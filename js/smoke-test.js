// smoke-test.js

// Importa los módulos o librerías necesarias para el smoke test
const http = require('http');
const assert = require('assert');
const { describe, it } = require('mocha');

// URL del servidor que se va a probar
const url = 'http://localhost:3000'; 

// Realiza las pruebas de humo
describe('Smoke Test', () => {
  it('El servidor está corriendo y responde correctamente', (done) => {
    // Realiza una solicitud HTTP a la URL del servidor
    http.get(url, (res) => {
      // Verifica que el código de respuesta sea 200 (OK)
      assert.strictEqual(res.statusCode, 200, 'El servidor no respondió con código 200 (OK)');
      // Verifica que la respuesta del servidor sea la esperada
      done();
    }).on('error', (err) => {
      // Si hay un error en la solicitud, falla la prueba
      assert.fail(`No se pudo conectar al servidor: ${err.message}`);
      done();
    });
  });
});
