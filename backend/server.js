// Importar el package (http) de node.
const http = require("http");

// Importar la nostra app.
const app = require("./app");

/** Lliço 1.
 * // Crear el nostre server, cridant al métode (createServer) que conté els arguments consulta i resposta(requête i réponse).
 * Funció:
 * const server = http.createServer((req, res) => {
 *       // De moment només enviem una sola resposta.Cridar el métode (end).
 *   res.end("Voilà la réponse du serveur !");
 * });
 */

// la fonction normalizePort renvoie un port valide, qu'il soit fourni sous la forme d'un numéro ou d'une chaîne ;
const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

// Lliço 2.
// // Li diem a la aplicació Express en quin port té que funcionar.
// app.set('port', process.env.PORT || 3000);
// // Al server li passem com argument la nostra app.
// const server = http.createServer(app);

/** El server està a l'escolta de la consulta(requête) enviada, amb el métode listen del server al port 3000.
 *  En cas que el port 3000 no està disponible utilitzem una variable entorn(environement) per utilitzar el port que ens envia l'entorn.  */
// server.listen(process.env.PORT || 3000);

// la fonction errorHandler  recherche les différentes erreurs et les gère de manière appropriée. Elle est ensuite enregistrée dans le serveur ;
const errorHandler = error => {
      if (error.syscall !== 'listen') {
            throw error;
      }
      const address = server.address();
      const bind = typeof address === 'string' ? 'pipe' + address : 'port: ' + port;
      switch (error.code) {
            case 'EACCES':
                  console.error(bind + ' requires elevated privileges.');
                  process.exit(1);
                  break;
            case 'EADDRINUSE':
                  console.error(bind + ' is already in use.');
                  process.exit(1);
                  break;
            default:
                  throw error;
      }
};

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
      const address = server.address();
      const bind = typeof address === 'string' ? 'pipe' + address : 'port' + port;
      console.log('Listening on ' + bind);
});

// un écouteur d'évènements est également enregistré, consignant le port ou le canal nommé sur lequel le serveur s'exécute dans la console.
server.listen(port);