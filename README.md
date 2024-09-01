# Quiz Application

Cette application de quiz est construite avec un backend en Node.js et un frontend en Vue.js. Elle permet aux utilisateurs de répondre à des questions à choix multiples et de voir leur score à la fin.

## Table des Matières

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Technologies Utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Contribuer](#contribuer)
- [Licence](#licence)

## Aperçu

Cette application de quiz propose des questions aléatoires et affiche le score de l'utilisateur à la fin. L'utilisateur peut répondre aux questions et recevoir un feedback instantané sur la réponse soumise. Après avoir répondu à toutes les questions, le score final est affiché, et l'utilisateur peut recommencer le quiz.

## Fonctionnalités

- Affichage de questions aléatoires
- Réponses à choix multiples
- Feedback instantané après soumission de chaque réponse
- Calcul du score final après avoir répondu à toutes les questions
- Possibilité de recommencer le quiz

## Technologies Utilisées

- **Frontend**: Vue.js 3
- **Backend**: Node.js, Express.js
- **Base de Données**: SQLite
- **Autres**: Axios pour les requêtes HTTP, Vue CLI pour le développement du frontend

## Installation

### Prérequis

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [Vue CLI](https://cli.vuejs.org/) (pour le développement du frontend)

### Étapes d'installation

1. **Clonez le dépôt**

```bash
git clone https://github.com/WaelChb/Quizz-app
cd quiz-app
```

   2. Installez les dépendances du backend

```bash
cd backend
npm install
```

3. Installez les dépendances du frontend

Ouvrez un nouveau terminal et exécutez :

```bash
cd frontend
npm install
```

Utilisation
Lancer le Backend
Accédez au répertoire backend dans votre terminal.

```bash
cd backend
```

Lancez le serveur backend.

```bash
node index.js
```

Le backend devrait être accessible à l'adresse http://localhost:5000.

Lancer le Frontend
Accédez au répertoire frontend dans votre terminal.

```bash
cd frontend
```

Lancez le serveur de développement Vue.js.

```bash
npm run serve
```

Le frontend devrait être accessible à l'adresse http://localhost:8080.

Utilisation de l'application
Ouvrez votre navigateur et accédez à http://localhost:8080.
Répondez aux questions du quiz et obtenez votre score à la fin!

Étapes pour ajouter des quiz :
Accédez au répertoire backend :

```bash
cd backend
```
Exécutez le script de seeding :

Le script seed.js va insérer des questions de quiz prédéfinies dans la base de données. Vous pouvez exécuter ce script avec la commande suivante :

```bash
node seed.js
```
Cette commande va ajouter les quiz à la base de données SQLite utilisée par le backend.

Vérifiez les données :

Après avoir exécuté le script de seeding, vous pouvez vérifier que les quiz ont été correctement ajoutés en accédant à l'API de quiz via votre navigateur ou un outil comme Postman.

Ouvrez votre navigateur et accédez à l'URL suivante pour voir la liste des quiz :

```bash
http://localhost:5000/api/quizzes
```
Si les quiz apparaissent dans le navigateur ou l'outil API, cela signifie que le script de seeding a fonctionné correctement.
