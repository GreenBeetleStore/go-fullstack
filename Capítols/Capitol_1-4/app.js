// Importar express.
const express = require("express");

// Crear la constant app(la nostra aplicació) buida cridant el métode express.
const app = express();

// Cette application Express contient quatre éléments de middleware :

// le premier enregistre « Requête reçue ! » dans la console et passe l'exécution ;
app.use((req, res, next) => {
  console.log("Requête reçue !");
  // Fer la crida a next per que envíe a la següent.
  next();
});

// le deuxième ajoute un code d'état 201 à la réponse et passe l'exécution ;
app.use((req, res, next) => {
  // Canviem l'status de la requête a (201:created).
  res.status(201);
  next();
});

// le troisième envoie la réponse JSON et passe l'exécution ;
// Utilitar el métode app.use que rebrà dintre la funció els arguments(req, res).
app.use((req, res, next) => {
  // Utilitzem l'objecte reponse amb el métode json
  res.json({ message: "Votre requête a bien été reçue !" });
  next();
});

// le dernier élément de middleware enregistre « Réponse envoyée avec succès ! » dans la console.
app.use((req, res) => {
  console.log("Réponse envoyée avec succès !");
});

// Exportem aquesta aplicació.
module.exports = app;
