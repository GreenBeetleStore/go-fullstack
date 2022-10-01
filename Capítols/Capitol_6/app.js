// Importar express.
const express = require("express");

// Crear la constant app(la nostra aplicació) buida cridant el métode express.
const app = express();

/** Chapitre 6
 *    Pour gérer la requête POST venant de l'application front-end, on a besoin d'en extraire le corps JSON.
 *    Pour cela, vous avez juste besoin d'un middleware très simple, mis à disposition par le framework Express.
 *    Juste après la déclaration de la constante  app  , ajoutez :
 */
app.use(express.json());

/** Chapitre 5
 * Eliminats tots els Middlewares ateriors i els substituim pel middleware amb la ruta de l'API(línia 20).
 */

/** Afegir headers al nostre objecte "response" dintre d'aquest middleware que situem devant del de l'API,
 *  És un middleware general sense ruta específica, vàlid per a totes les rutes.
 *    Ces headers permettent :
 *    · d'accéder à notre API depuis n'importe quelle origine ( '*' ) ;
 *    · d'ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) ;
 *    · d'envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).
 */
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  // Enviem l'execució al middleware següent amb "next".
  next();
});

// Chapitre 6: Afegir un middleware per interceptar les requêtes POST.
app.post("/api/stuff", (req, res, next) => {
  // Com que no tenim base de dades encara, fem un console:log del contingut del cor de la requête que és l'únic al que tenim accés per l'instant.
  console.log(req.body);
  // Si no s'envia cap resposta, la requête es blocarà costat utilitzador. Atribuir el codi(201)
  res.status(201).json({
    message: "Objet créé !",
  });
});

// Afegir la ruta de la nostra API"http://localhost:3000/api/stuff" utilitzant el métode "use".
// Chapitre 6: Substituir "use" per "get" per interceptar només les requêtes GET.
app.get("/api/stuff", (req, res, next) => {
  // Crear 2 objectes dintre de la tabla "stuff".
  const stuff = [
    {
      _id: "oeihfzeoi",
      title: "Mon premier objet",
      description: "Les infos de mon premier objet",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
      price: 4900, // El preu està en céntims.
      userId: "qsomihvqios",
    },
    {
      _id: "oeihfzeomoihi",
      title: "Mon deuxième objet",
      description: "Les infos de mon deuxième objet",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
      price: 2900,
      userId: "qsomihvqios",
    },
  ];
  // Aquest middleware atribueix un codi(200) i reenvía en resposta json la constant "stuff".
  res.status(200).json(stuff);
});

// Exportem aquesta aplicació.
module.exports = app;
