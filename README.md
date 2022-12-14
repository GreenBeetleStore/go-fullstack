<b># go-fullstack</b>
<h1> Passez au Full Stack avec Node.js, Express et MongoDB </h1>

<h2> Chapitre 1. Tirez le maximum de ce cours. </h2>

<h2> Chapitre 2. Configurez votre environnement de développement. </h2>

  <b>En résumé</b>
  
    · Node peut être installé à partir de NodeJS.org.

    ·L'application front-end pour ce cours peut être clonée avec  git clone  , installée avec  npm install  , et lancée avec  npm run start

    ... Maintenant que votre environnement de développement est configuré, voyons ensemble comment démarrer votre serveur Node ! 
    
<h2> Chapitre 3. Démarrez votre serveur Node. </h2>

  <b>En résumé</b>
  
    · Les projets Node sont initialisés avec la commande  npm init  .

    · Un serveur Node basique est démarré avec la méthode  createServer  du package  http  .

    · Nodemon est un package qui mettra à jour votre serveur démarré à chaque changement de fichier, vous facilitant le développement Node.

    ... Prêt à créer une application Express ? C'est ce que nous allons faire dans le chapitre suivant ! 
    
<h2> Chapitre 4. Créez une application Express. </h2>

  <b>En résumé</b>
  
    · Le framework Express est installé et enregistré dans le  package.json  avec   npm install express  .

    · Pour créer une application Express, appelez simplement la méthode  express()  .

    · Un middleware est un bloc de code qui traite les requêtes et réponses de votre application.

    · Ajouter la normalisation de port, la gestion d'erreur et du logging basique à votre serveur Node le rend plus constant et plus facile à déboguer.

    ... Maintenant que vous savez utiliser le framework Express, nous allons pouvoir pour de bon commencer à créer notre API. Rendez-vous dans le chapitre suivant ! 

<h2> Chapitre 5. Créez une route GET. </h2>

  <b>En résumé</b>
  
    · La méthode app.use() vous permet d'attribuer un middleware à une route spécifique de votre application.

    · Le CORS définit comment les serveurs et les navigateurs interagissent, en spécifiant quelles ressources peuvent être demandées de manière légitime – par défaut, les requêtes AJAX sont interdites.

    · Pour permettre des requêtes cross-origin (et empêcher des erreurs CORS), des headers spécifiques de contrôle d'accès doivent être précisés pour tous vos objets de réponse.

    ... Maintenant que nous avons créé notre route Get, nous allons créer une route Post, dans le chapitre suivant !
    
<h2> Chapitre 6. Créez une route POST. </h2>

  <b>En résumé</b>
  
    · En passant votre middleware à  app.post()  au lieu de  app.use()  , il répondra uniquement aux requêtes de type POST.

    · Qu'avons-nous appris dans cette première partie ?
    
    · Dans cette première partie du cours, vous avez :

    · Configuré votre environnement de développement, avec toutes les dépendances requises pour démarrer ;

    · Démarré votre premier serveur Node et l'avez utilisé pour gérer votre première application Express ;

    · Créé deux routes pour votre application, et vous avez également implémenté CORS pour vous assurer que le front-end pouvait effectuer des appels vers votre application en toute sécurité.

    ... Dans la partie suivante du cours, vous ajouterez la couche de base de données MongoDB. Celle-ci est essentielle pour votre application, et permettra de la rendre entièrement dynamique.
    
<h2> Chapitre 7. Êtes-vous prêt à créer un serveur Express ? </h2>
QUIZ - Bravo ! Vous avez réussi cet exercice !

  <b>Compétences évaluées</b>
  Créer un serveur web simple avec Express
  
  <b>Question 1</b>
  En créant un serveur HTTP avec Node, on utilise la fonction  createServer()  . On peut passer une fonction à  createServer()  qui réagira aux requêtes entrantes. Quels arguments reçoit cette fonction passée ?

  Attention, plusieurs réponses sont possibles.

    ✅ L'objet requête

    ✅ L'objet réponse

    · La fonction  next()

    · La variable environnement  PORT
  
  La fonction passée en argument à  createServer()  recevra les objets requête et réponse comme arguments, généralement raccourcis en  req  et  res  . La fonction  next()  existe uniquement à l'intérieur d'une application Express, et la fonction passée ne reçoit pas de variables environnement comme arguments.

  <b>Question 2</b>
  Dans une application Express, que doit faire le dernier middleware pour une route donnée pour empêcher les requêtes d'expirer ?

    · Modifier le statut de l'objet réponse

    ✅ Renvoyer la réponse au client

    · Modifier les headers de l'objet réponse

    · Appeler la fonction  next()
  
  Le dernier middleware d'une chaîne doit renvoyer la réponse au client pour empêcher la requête d'expirer.

  <b>Question 3</b>
  À quoi sert la fonction  next()  ?

    · Elle renvoie la réponse au client

    · Elle empêche les erreurs CORS

    ✅ Elle passe l'exécution au prochain middleware de la chaîne

    · Elle analyse le corps de la requête
  
  Un middleware appelle la fonction  next()  pour passer l'exécution au prochain middleware de la chaîne.

  <b>Question 4</b>
  Un code HTTP de 200 représente généralement :

    · Une erreur serveur

    ✅ Une requête réussie

    · Une création de données réussie

    · Une erreur d'authentification
    
  Un code HTTP de 200 est le code standard pour une requête réussie, surtout pour des requêtes GET.

  <b>Question 5</b>
  Un code HTTP de 201 représente généralement :

    · Une erreur serveur

    · Une requête réussie

    ✅ Une création de données réussie

    · Une erreur d'authentification
  
  Un code 201 signifie généralement que la requête a réussi, et a causé la création d'une nouvelle ressource.

  <b>Question 6</b>
  Une erreur CORS peut survenir quand :

    · une requête HTTP expire

    · le serveur répond avec une erreur inconnue

    · la connexion est perdue pendant un transfert de données

    ✅ le serveur et le client ne partagent pas la même origine
  
  La sécurité CORS est une mesure de sécurité par défaut pour empêcher l'utilisation de ressources par des origines non autorisées.

  <b>Question 7</b>
  Quelle méthode permet d'empêcher des erreurs CORS ?

    ✅ Configurer des headers spécifiques sur l'objet réponse

    · Configurer des headers spécifiques sur l'objet requête

    · Utiliser le bon code HTTP

    · Envoyer la réponse en format JSON
  
  Configurer les bons headers sur l'objet réponse permet l'envoi et la réception de requêtes et de réponses sans erreurs CORS.

  <b>Question 8</b>
  Le package  body-parser  :

    · permet d'éviter les erreurs CORS

    · permet la persistance de données

    ✅ rend les données du corps de la requête exploitables

    · convertit les données de l'objet réponse en JSON
  
  Quand une requête HTTP est reçue par le serveur, son corps est rarement sous forme utile. Le package body-parser analyse le corps de la requête, et le formate pour en faciliter l'exploitation.

<h2> Chapitre 8. Configurez votre base de données. </h2>

  <b>En résumé</b>
  
    · Pour des applications qui ont besoin d'évoluer rapidement, les bases de données NoSQL comme MongoDB sont souvent un bon choix de technologie.

    · MongoDB Atlas permet d'héberger gratuitement une base de données MongoDB.

    · Le package Mongoose facilite les interactions entre votre application Express et votre base de données MongoDB.

    ... Maintenant que vous avez configuré votre base de données, voyons ensemble comment créer un schéma de données pour rendre notre application robuste, dans le chapitre suivant ! 

<h2> Chapitre 9. Créez un schéma de données. </h2>

  <b>En résumé</b>
  
    · La méthode  Schema  de Mongoose vous permet de créer un schéma de données pour votre base de données MongoDB.

    · La méthode  model  transforme ce modèle en un modèle utilisable.

    ... Maintenant que vous avez défini le schéma de données, voyons comment sauvegarder et récupérer les données de notre base de données !
    
<h2> Chapitre 10. Enregistrez et récupérez des données. </h2>

  <b>En résumé</b>
  
    · Les méthodes de votre modèle Thing permettent d'interagir avec la base de données :

      · save()  – enregistre un Thing ;

      · find()  – retourne tous les Things ;

      · findOne()  – retourne un seul Thing basé sur la fonction de comparaison qu'on lui passe (souvent pour récupérer un Thing par son identifiant unique).

    · La méthode  app.get()  permet de réagir uniquement aux requêtes de type GET.

    ... Dans le prochain chapitre, nous utiliserons le reste des opérations CRUD pour mettre à jour et supprimer nos données dans la base de données. Allons-y ! 

<h2> Chapitre 11. Modifiez et supprimez des données. </h2>

  <b>En résumé</b>
  
    · app.put()  et  app.delete()  attribuent des middlewares aux requêtes de type PUT et de type DELETE.

    · Les méthodes  updateOne()  et  delete()  de votre modèle Thing permettent de mettre à jour ou de supprimer un Thing dans la base de données.

  <b>Qu'avons-nous appris dans cette partie du cours ?</b>
  
    · Vous avez configuré votre base de données MongoDB et l'avez connectée à votre application Express.

    · Vous avez utilisé Mongoose pour créer un modèle de données afin de faciliter les opérations de la base de données.

    · Vous avez implémenté, dans votre application Express, les routes CRUD qui exploitent votre modèle de données Mongoose, rendant ainsi votre application entièrement dynamique.

    ... Dans la partie suivante de ce cours, nous nous pencherons sur une thématique extrêmement importante : la sécurité.

<h2> Chapitre 12. QUIZ. Savez-vous implémenter le CRUD ? </h2>

  <b>Compétences évaluées</b>
  Créer une API REST avec Node, Express et MongoDB
  
  <b>Description</b>
  Ce quiz est en fait un réel cas pratique, dans lequel vous aurez l'opportunité de tester vos compétences en codant !

  Pour pouvoir répondre correctement, il vous faudra créer une API fonctionnelle comme nous venons de le faire pendant le cours. 
  Votre API devra être connectée à une base de données, car les différentes opérations CRUD seront testées et vérifiées !

  Vous allez créer une API basique pour une boutique en ligne qui permet de créer, lire, modifier et supprimer des produits ( Product ). 
  
  Les Product auront quatre champs obligatoires :

    · name : le nom du produit, de type String ;
    · description : la description du produit, de type String ;
    · price : le prix du produit, de type Number ;
    · inStock : si le produit est en stock, de type Boolean.
  
  Vous allez implémenter cinq routes :

    <b>GET:</b> /api/products
      Retournera tous les produits sous la forme{ products: Product[] }
    <b>GET:</b> /api/products/:id
      Retournera le produit avec le_id fourni sous la forme { product: Product }
    <b>POST:</b> /api/products
      Créera un nouveau Product dans la base de données.
      Le corps de la requête a pour forme :
      {
          "name": string,
          "description": string,
          "price": number,
          "inStock": boolean
      }
      Il retournera le Product ainsi créé (y compris son champ _id ), sous la forme{ product: Product }.

      La Promise retournée par la méthode save() de votre modèle Mongoose reçoit le produit créé :

      product.save()
      .then(product => ... ... .json({ product }))
      .catch(error => ... ...)
    <b>PUT:</b> /api/products/:id
      Modifiera le produit avec le _id fourni selon les données envoyées dans le corps de la requête.
      Le corps de la requête a pour forme :
      {
          "name": string,
          "description": string,
          "price": number,
          "inStock": boolean
      }
      Retournera un objet de la forme{ message: 'Modified!' }
    <b>DELETE :</b> /api/products/:id
      Supprimera le produit avec le _id fourni.
      Retournera un objet de la forme { message: 'Deleted!' }
      
  Votre API devra tourner sur votre machine locale en localhost (de préférence en port 3000, mais l'application front-end vous permet de modifier ce port si besoin) et accepter les requêtes HTTP venant de n'importe quelle origine (n'oubliez pas la configuration CORS !).

  Pour tester votre API, vous allez installer une mini-application front-end. Clonez le repo avec le code frontend sur ce lien.

  Depuis le dossier cloné, exécutez npm install puis npm start . Vous devriez voir s'ouvrir une fenêtre de navigateur comme celle-ci :
  
  Voir: https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/exercises/3732
  Front end app
  Application front-end
  
  Si votre serveur tourne, cliquez sur TEST ROUTES pour lancer les tests. 
  Ces tests vous permettront de vérifier que vous avez bien réussi à implémenter les routes demandées, et donc de valider ce quiz ! 
  Vous verrez apparaître des messages de succès (ou d'erreur) selon que l'application a réussi à faire fonctionner votre API ou non.

  Si votre navigateur s'ouvre avec une erreur 404, attendez quelques secondes et faites un refresh.

  Parfois, lors de la première tentative après le lancement de l'application, celle-ci émet une erreur même si l'API fonctionne. 
  Recliquez sur TEST ROUTES. S'il y a toujours une erreur, il est probable qu'elle vienne de votre API.

  <b>Question 1</b>
  Quand tout fonctionnera bien, l'application de test affichera un mot secret. Quel est ce mot secret ? Sélectionnez-le dans la liste ci-dessous :

        · GIRAFFE

        · ELEPHANT

        ✅ GORILLA

        · ZEBRA

<img src = "Gorilla.png" />

<h2> Chapitre 13. Optimisez la structure du back-end. </h2>

  <b>En résumé</b>
  
  · La méthodeexpress.Router()  vous permet de créer des routeurs séparés pour chaque route principale de votre application – vous y enregistrez ensuite les routes individuelles.

  · Un fichier de contrôleur exporte des méthodes qui sont ensuite attribuées aux routes pour améliorer la maintenabilité de votre application.

  ... Maintenant que tout est prêt, commençons à implémenter l'authentification utilisateur.

<h2> Chapitre 14. Préparez la base de données pour les informations d'authentification </h2>

  <b>En résumé</b>
  
  · bcrypt  est un package de cryptage que vous pouvez installer avec  npm  .

  · mongoose-unique-validator  améliore les messages d'erreur lors de l'enregistrement de données uniques.

  ... Maintenant que notre modèle est prêt, nous allons commencer à l'utiliser dans le chapitre suivant pour enregistrer les nouveaux utilisateurs dans notre base de données, et appliquer le chiffrement de mot de passe.

<h2> Chapitre 15. Créez des utilisateurs </h2>

  <b>En résumé</b>
  
  · La méthode  hash()  de bcrypt crée un hash crypté des mots de passe de vos utilisateurs pour les enregistrer de manière sécurisée dans la base de données.

  ... Dans le chapitre suivant, nous implémenterons notre fonction login pour vérifier les informations d'identification des utilisateurs pour leur permettre de se connecter. 

<h2> Chapitre 16. Vérifiez les informations d'identification d'un utilisateur </h2>

  <b>En résumé</b>
  
  · La méthode compare de bcrypt compare un string avec un hash pour, par exemple, vérifier si un mot de passe entré par l'utilisateur correspond à un hash sécurisé enregistré en base de données. Cela montre que même bcrypt ne peut pas décrypter ses propres hashs.

  ... Dans le chapitre suivant, vous découvrirez l'authentification par token, son rôle, son mode de fonctionnement et comment nous l'appliquerons dans notre nouvelle application pour sécuriser correctement notre API.

<h2> Chapitre 17. Créez des tokens d'authentification </h2>

  <b>En résumé</b>
  
  · Les JSON web tokens sont des tokens chiffrés qui peuvent être utilisés pour l'autorisation.

  · La méthode sign() du package jsonwebtoken utilise une clé secrète pour chiffrer un token qui peut contenir un payload personnalisé et avoir une validité limitée.

  ... Dans le chapitre suivant, nous créerons un élément de middleware pour vérifier ce token et son contenu, afin de nous assurer que seules les requêtes autorisées ont accès aux routes à protéger.

<h2> Chapitre 18. Configurez le middleware d'authentification </h2>

  <b>En résumé</b>
  
  · La méthode verify() du package jsonwebtoken permet de vérifier la validité d'un token (sur une requête entrante, par exemple).

  · Ajoutez bien votre middleware d'authentification dans le bon ordre sur les bonnes routes.

  · Attention aux failles de sécurité !

  <b>Qu'avez-vous appris dans cette partie du cours ?</b>
  
  · Vous avez ajouté un modèle de données User afin de stocker les informations utilisateur dans votre base de données.

  · Vous avez implémenté le cryptage de mot de passe sécurisé afin de stocker en toute sécurité les mots de passe utilisateur.

  · Vous avez créé et envoyé des tokens au front-end pour authentifier les requêtes.

  · Vous avez ajouté le middleware d'authentification pour sécuriser les routes dans votre API. De cette façon, seules les requêtes authentifiées seront gérées.

   ... Dans la dernière partie de ce cours, vous en apprendrez plus sur la gestion des fichiers :

      . comment capturer les fichiers provenant du front-end ;

      · comment les enregistrer sur votre serveur ;

      · comment les supprimer lorsqu'ils ne sont plus nécessaires.
    
<h2> Chapitre 19. Quiz. Savez-vous sécuriser votre API ? </h2>

  Bravo ! Vous avez réussi cet exercice !
  
  <b>Compétences évaluées</b>
  Mettre en place un système d'authentification sur une application Express
  
  <b> Question 1 </b>
  Dans une application Express, un contrôleur…

      … enregistre des routes à l'application.

  ✅ … contient la logique métier pour une ou plusieurs routes.

      … enregistre des routes dans un routeur, qu'il exporte ensuite.
  
  Les contrôleurs contiennent la logique métier, et sont généralement importés par les routeurs, qui attribuent cette logique aux routes spécifiques.

  <b> Question 2 </b>
  Il est généralement acceptable de stocker des mots de passe non cryptés dans une base de données si cette base requiert un mot de passe d'accès.

  ✅ Vrai

   · Faux
  
  Il n'est jamais acceptable de stocker des mots de passe non cryptés, peu importe la protection de la base de données elle-même. 
  On ne sait jamais comment les données pourraient fuir et donner un accès ouvert aux mots de passe utilisateur.

  <b> Question 3 </b>
  Que fait la fonction hash de bcrypt ?

    · Elle crée un string encodé qui peut être décodé avec une même clé secrète.

    · Elle crypte un string avec un algorithme simple bidirectionnel.

   ✅ Elle crypte un string avec un algorithme unidirectionnel, d'une manière quasi indécryptable.
  
  Le package bcrpyt permet un cryptage sécurisé avec un algorithme unidirectionnel.

  <b> Question 4 </b>
  Avec des hashs bcrypt, comment sait-on quand un utilisateur entre le bon mot de passe ?

    · Pour un string donné, bcrypt émettra toujours le même hash, on peut donc les comparer directement.

    · bcrypt décrypte les deux hashs pour comparer les strings d'origine.

   ✅ bcrypt sait quand deux hashs différents ont été produits à partir du même string d'origine.
  
  Il est virtuellement impossible de calculer le string d'origine à partir d'un hash bcrypt, mais le package bcrypt sait comparer deux hashs pour savoir si les deux viennent d'un même string d'origine (cf. P vs NP problem pour plus d'informations sur la base mathématique de ce phénomène).

  <b> Question 5 </b>
  Un token JWT est crypté avec un algorithme unidirectionnel.

    · Vrai

   ✅ Faux
  
  Les tokens JWT sont encodés et non cryptés, et peuvent donc être décodés avec la clé secrète.

  <b> Question 6 </b>
  Un token JWT, une fois signé, est valable indéfiniment.

    · Vrai

   ✅ Faux
  
  On peut fixer un délai d'expiration pour un token JWT au moment de sa signature.

  <b> Question 7 </b>
  Les tokens JWT sont sécurisés parce que :

    · il n'y a pas de session stockée sur le serveur qui pourrait être détournée.

    · leur payload encodé peut contenir des données qui permettent de vérifier que l'utilisateur connecté n'utilise pas le token de quelqu'un d'autre.

    · ils sont très difficiles à fausser sans connaître la clé secrète.

   ✅ toutes les réponses ci-dessus.
  
  Les tokens JWT ont plusieurs avantages qui les rendent sécurisés.

    <b> Question 8 </b>
  Dans quel header de requête envoie-t-on généralement un token ?

    · Authentication.

    · Access-Control-Allow-Origin.

   ✅ Authorization.

    · X-Requested-With.
  
  Même s'il n'y a pas de règle absolue, la majorité des API requièrent que les tokens d'authentification soient envoyés dans un header Authorization.

<h2> Chapitre 20. Acceptez les fichiers entrants avec multer. </h2>

  <b>En résumé</b>
  
  · multer est un package de gestion de fichiers.

  · Sa méthode diskStorage()  configure le chemin et le nom de fichier pour les fichiers entrants.

  · Sa méthode single()  crée un middleware qui capture les fichiers d'un certain type (passé en argument), et les enregistre au système de fichiers du serveur à l'aide du storage configuré.

  ... Avant de pouvoir appliquer notre middleware à nos routes stuff , nous devrons les modifier quelque peu, car la structure des données entrantes n'est pas tout à fait la même avec des fichiers et des données JSON. Voyons ça dans le chapitre suivant ! 

<h2> Chapitre 21. Modifiez les routes pour prendre en compte les fichiers. </h2>

  <b>En résumé</b>
  
  · JSON.parse() transforme un objet stringifié en Object JavaScript exploitable.

  · Vous aurez besoin dereq.protocol  et de req.get('host'), connectés par  '://'  et suivis de req.file.filename, pour reconstruire l'URL complète du fichier enregistré.

  · Configurez votre serveur pour renvoyer des fichiers statiques pour une route donnée avec  express.static()  et  path.join().

  ... Dans le prochain chapitre, nous verrons comment développer la fonction delete du back-end !

<h2> Chapitre 22. Développez la fonction delete du back-end. </h2>

  <b>En résumé</b>
  
  · Le package fs expose des méthodes pour interagir avec le système de fichiers du serveur.

  · La méthode unlink() du package  fs  vous permet de supprimer un fichier du système de fichiers.

  <b>Qu'avez-vous appris dans cette partie ?</b>
  
  Vous avez presque terminé. Bravo !

  Regardons ce que vous avez appris :

  · Vous avez créé un serveur Node et l'avez utilisé pour servir une application Express.

  · Vous avez connecté votre application à une base de données MongoDB et, à l'aide de Mongoose, vous avez créé une API RESTful permettant les opérations CRUD (Create, Read, Update and Delete, soit Créer, Lire, Modifier et Supprimer).

  · Vous avez implémenté une authentification sécurisée à base du token JWT.

  · Enfin, vous avez implémenté la gestion du téléchargement de fichiers, permettant ainsi aux utilisateurs d'ajouter et de supprimer des images.

  <b>Félicitations !</b> Vous avez bientôt terminé ce cours sur Node, Express et MongoDB. Je vous laisse répondre au dernier quiz pour tester vos compétences.

  La suite ? À vous de choisir ! Vous pouvez par exemple approfondir vos connaissances back-end. 
  Vous pouvez aussi commencer l'apprentissage d'un framework ou d'une librairie front-end avancée telle que Angular, React ou Vue.

  Où que vous alliez par la suite, je vous souhaite bonne chance et happy coding !

<h2> Chapitre 23. QUIZ. Saurez-vous gérer des fichiers utilisateur ?  </h2>

  Bravo ! Vous avez réussi cet exercice !
  
  <b>Compétences évaluées</b>
  
  Gérer des fichiers utilisateurs sur une application Express
  
  <b>Question 1</b>
  En configurant multer comme middleware de gestion de fichiers, quels sont les deux arguments nécessaires ?

    · source et destination .

    · destination et filetype .

    · filename et filetype .

   ✅ destination et filename .
  
  Le package multer a besoin de connaître la destination du fichier ainsi que le nom de fichier souhaité.

  <b>Question 2</b>
  Quelle propriété est ajoutée à la requête par le middleware multer ?

   ✅ L'objet file .

    · L'objet body .

    · L'objet formData .

    · L'objet host .
  
  Le package multer ajoute une propriété req.file .

  <b>Question 3</b>
  Comment récupère-t-on le segment de base de l'URL de notre serveur ?

    · `${req.body}://${req.host}`

   ✅ `${req.protocol}://${req.get('host')}`

    · `${req.protocol}://${req.host}`

    · `${req.get('protocol')}://${req.get('host')}`
  
  Pour construire l'URL pour notre serveur, il nous faut le protocole ( http ou https généralement), le segment :// , puis l'hôte de la requête (dans le cas de notre serveur de développement, il s'agit de localhost:3000 ).

  <b>Question 4</b>
  Pour permettre l'accès à des ressources statiques comme des images, quelle configuration de middleware est correcte ?

    · app.use('/images', res.send(path.join(__dirname, 'images')));

    · app.use('/images', express.static(__dirname, '/images'));

   ✅ app.use('/images', express.static(path.join(__dirname, 'images')))

    · app.use('/images', (req, res, next) => {
        next(path.join(__dirname, 'images'));
      })
  
  À l'aide du package path et de la méthode Express static , on peut servir des ressources statiques.

  <b>Question 5</b>
  Si une requête entrante contient un fichier ainsi que d'autres données, notre fonctionbodyParser.json() transformera automatiquement les autres données en JSON exploitable.

    · Vrai.

   ✅ Faux.
  
  Faux. Les données entrantes sont sous la forme de form-data . Il faut donc utiliser JSON.parse() pour transformer des chaînes de caractères en JSON exploitable.

  <b>Question 6</b>
  Laquelle de ces fonctions permet de supprimer un fichier à l'aide du package fs ?

    · fs.remove() .

    · fs.delete() .

   ✅ fs.unlink() .

    · fs.deleteOne() .
  
  La fonction unlink permet de supprimer des fichiers du système de fichiers.

  <b>Question 7</b>
  multer nous donne automatiquement l'extension d'un fichier entrant.

    · Vrai.

   ✅ Faux.
  
  Faux. Il nous faut utiliser le type MIME d'un fichier pour déterminer son format, et donc trouver son extension.

  <b>Question 8</b>
  En implémentant multer sur une route qui utilise également un middleware d'authentification, l'ordre d'enregistrement des middlewares n'a aucune importance.

    · Vrai.

   ✅ Faux.
  
  Faux. Si multer est enregistré avant un middleware d'authentification, tout fichier contenu dans une requête, même non authentifiée, sera enregistré sur le système de fichiers. Il est donc essentiel, dans cette situation, d'enregistrer multer après le middleware d'authentification.





