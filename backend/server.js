// Importar el package (http) de node.
const http = require("http");
// Crear el nostre server, cridant al métode (createServer) que conté els arguments consulta i resposta(requête i réponse).
const server = http.createServer((req, res) => {
      // De moment només enviem una sola resposta.Cridar el métode (end).
  res.end("Voilà la réponse du serveur !");
});
// El server està a l'escolta de la consulta(requête) enviada, amb el métode listen del server al port 3000.
server.listen(process.env.PORT || 3000);
 // En cas que el port 3000 no està disponible utilitzem una variable entorn(environement) per utilitzar el port que ens envia l'entorn.