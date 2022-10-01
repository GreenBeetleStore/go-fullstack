# go-fullstack
Passez au Full Stack avec Node.js, Express et MongoDB

Chapitre 1. Tirez le maximum de ce cours.

Chapitre 2. Configurez votre environnement de développement.

  En résumé
    Node peut être installé à partir de NodeJS.org.

    L'application front-end pour ce cours peut être clonée avec  git clone  , installée avec  npm install  , et lancée avec  npm run start

    ... Maintenant que votre environnement de développement est configuré, voyons ensemble comment démarrer votre serveur Node ! 
    
Chapitre 3. Démarrez votre serveur Node.

  En résumé
    Les projets Node sont initialisés avec la commande  npm init  .

    Un serveur Node basique est démarré avec la méthode  createServer  du package  http  .

    Nodemon est un package qui mettra à jour votre serveur démarré à chaque changement de fichier, vous facilitant le développement Node.

    ... Prêt à créer une application Express ? C'est ce que nous allons faire dans le chapitre suivant ! 
    
Chapitre 4. Créez une application Express.

  En résumé
    Le framework Express est installé et enregistré dans le  package.json  avec   npm install express  .

    Pour créer une application Express, appelez simplement la méthode  express()  .

    Un middleware est un bloc de code qui traite les requêtes et réponses de votre application.

    Ajouter la normalisation de port, la gestion d'erreur et du logging basique à votre serveur Node le rend plus constant et plus facile à déboguer.

    ... Maintenant que vous savez utiliser le framework Express, nous allons pouvoir pour de bon commencer à créer notre API. Rendez-vous dans le chapitre suivant ! 

Chapitre 5. Créez une route GET.

  En résumé
    La méthode app.use() vous permet d'attribuer un middleware à une route spécifique de votre application.

    Le CORS définit comment les serveurs et les navigateurs interagissent, en spécifiant quelles ressources peuvent être demandées de manière légitime – par défaut, les requêtes AJAX sont interdites.

    Pour permettre des requêtes cross-origin (et empêcher des erreurs CORS), des headers spécifiques de contrôle d'accès doivent être précisés pour tous vos objets de réponse.

    ... Maintenant que nous avons créé notre route Get, nous allons créer une route Post, dans le chapitre suivant !
    
Chapitre 6. Créez une route POST.

  En résumé
    En passant votre middleware à  app.post()  au lieu de  app.use()  , il répondra uniquement aux requêtes de type POST.

    Qu'avons-nous appris dans cette première partie ?
    
    Dans cette première partie du cours, vous avez :

    Configuré votre environnement de développement, avec toutes les dépendances requises pour démarrer ;

    Démarré votre premier serveur Node et l'avez utilisé pour gérer votre première application Express ;

    Créé deux routes pour votre application, et vous avez également implémenté CORS pour vous assurer que le front-end pouvait effectuer des appels vers votre application en toute sécurité.

    ... Dans la partie suivante du cours, vous ajouterez la couche de base de données MongoDB. Celle-ci est essentielle pour votre application, et permettra de la rendre entièrement dynamique.
    
Chapitre 7. Êtes-vous prêt à créer un serveur Express ?
QUIZ - Bravo ! Vous avez réussi cet exercice !

  Compétences évaluées
  Créer un serveur web simple avec Express
  
  Question 1
  En créant un serveur HTTP avec Node, on utilise la fonction  createServer()  . On peut passer une fonction à  createServer()  qui réagira aux requêtes entrantes. Quels arguments reçoit cette fonction passée ?

  Attention, plusieurs réponses sont possibles.

    ✅ L'objet requête

    ✅ L'objet réponse

    · La fonction  next()

    · La variable environnement  PORT
  
  La fonction passée en argument à  createServer()  recevra les objets requête et réponse comme arguments, généralement raccourcis en  req  et  res  . La fonction  next()  existe uniquement à l'intérieur d'une application Express, et la fonction passée ne reçoit pas de variables environnement comme arguments.

  Question 2
  Dans une application Express, que doit faire le dernier middleware pour une route donnée pour empêcher les requêtes d'expirer ?

    · Modifier le statut de l'objet réponse

    ✅ Renvoyer la réponse au client

    · Modifier les headers de l'objet réponse

    · Appeler la fonction  next()
  
  Le dernier middleware d'une chaîne doit renvoyer la réponse au client pour empêcher la requête d'expirer.

  Question 3
  À quoi sert la fonction  next()  ?

    · Elle renvoie la réponse au client

    · Elle empêche les erreurs CORS

    ✅ Elle passe l'exécution au prochain middleware de la chaîne

    · Elle analyse le corps de la requête
  
  Un middleware appelle la fonction  next()  pour passer l'exécution au prochain middleware de la chaîne.

  Question 4
  Un code HTTP de 200 représente généralement :

    · Une erreur serveur

    ✅ Une requête réussie

    · Une création de données réussie

    · Une erreur d'authentification
    
  Un code HTTP de 200 est le code standard pour une requête réussie, surtout pour des requêtes GET.

  Question 5
  Un code HTTP de 201 représente généralement :

    · Une erreur serveur

    · Une requête réussie

    ✅ Une création de données réussie

    · Une erreur d'authentification
  
  Un code 201 signifie généralement que la requête a réussi, et a causé la création d'une nouvelle ressource.

  Question 6
  Une erreur CORS peut survenir quand :

    · une requête HTTP expire

    · le serveur répond avec une erreur inconnue

    · la connexion est perdue pendant un transfert de données

    ✅ le serveur et le client ne partagent pas la même origine
  
  La sécurité CORS est une mesure de sécurité par défaut pour empêcher l'utilisation de ressources par des origines non autorisées.

  Question 7
  Quelle méthode permet d'empêcher des erreurs CORS ?

    ✅ Configurer des headers spécifiques sur l'objet réponse

    · Configurer des headers spécifiques sur l'objet requête

    · Utiliser le bon code HTTP

    · Envoyer la réponse en format JSON
  
  Configurer les bons headers sur l'objet réponse permet l'envoi et la réception de requêtes et de réponses sans erreurs CORS.

  Question 8
  Le package  body-parser  :

    · permet d'éviter les erreurs CORS

    · permet la persistance de données

    ✅ rend les données du corps de la requête exploitables

    · convertit les données de l'objet réponse en JSON
  
  Quand une requête HTTP est reçue par le serveur, son corps est rarement sous forme utile. Le package body-parser analyse le corps de la requête, et le formate pour en faciliter l'exploitation.

Chapitre 8. Configurez votre base de données.

  En résumé
    Pour des applications qui ont besoin d'évoluer rapidement, les bases de données NoSQL comme MongoDB sont souvent un bon choix de technologie.

    MongoDB Atlas permet d'héberger gratuitement une base de données MongoDB.

    Le package Mongoose facilite les interactions entre votre application Express et votre base de données MongoDB.

    ... Maintenant que vous avez configuré votre base de données, voyons ensemble comment créer un schéma de données pour rendre notre application robuste, dans le chapitre suivant ! 

Chapitre 9. 

