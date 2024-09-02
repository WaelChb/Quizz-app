// seed.js
const mongoose = require("mongoose");
const Quiz = require("./models/Quiz");

// Connexion à MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/quizapp")
  .then(() => {
    console.log("Connecté à MongoDB pour le seeding.");
  })
  .catch((err) => {
    console.error("Erreur de connexion à MongoDB:", err);
  });

// Exemples de données de quiz
const quizzes = [
  {
    question: "Quel est le plus grand océan du monde?",
    options: ["Atlantique", "Indien", "Arctique", "Pacifique"],
    correctAnswer: "Pacifique",
    category: "culture générale",
  },
  {
    question: "Qui a écrit 'Les Misérables'?",
    options: [
      "Victor Hugo",
      "Emile Zola",
      "Gustave Flaubert",
      "Alexandre Dumas",
    ],
    correctAnswer: "Victor Hugo",
    category: "culture générale",
  },
  {
    question: "Quel est le pays d'origine des pyramides de Gizeh?",
    options: ["Égypte", "Mexique", "Irak", "Iran"],
    correctAnswer: "Égypte",
    category: "culture générale",
  },
  {
    question: "En quelle année a eu lieu le premier atterrissage sur la Lune?",
    options: ["1965", "1969", "1971", "1975"],
    correctAnswer: "1969",
    category: "culture générale",
  },
  {
    question: "Quel est le nom de la plus grande chaîne de montagnes du monde?",
    options: ["Les Alpes", "Les Andes", "L'Himalaya", "Les Rocheuses"],
    correctAnswer: "L'Himalaya",
    category: "culture générale",
  },
  {
    question: "Quel est le plus grand désert du monde?",
    options: [
      "Désert de Gobi",
      "Désert du Sahara",
      "Désert de Kalahari",
      "Désert d'Atacama",
    ],
    correctAnswer: "Désert du Sahara",
    category: "culture générale",
  },
  {
    question: "Quelle est la capitale de l'Australie?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: "Canberra",
    category: "culture générale",
  },
  {
    question: "Quel est le plus grand pays du monde en termes de superficie?",
    options: ["Canada", "Chine", "États-Unis", "Russie"],
    correctAnswer: "Russie",
    category: "culture générale",
  },
  {
    question: "Qui a peint la Mona Lisa?",
    options: [
      "Leonard de Vinci",
      "Vincent van Gogh",
      "Pablo Picasso",
      "Claude Monet",
    ],
    correctAnswer: "Leonard de Vinci",
    category: "culture générale",
  },
  {
    question: "Quel est le plus long fleuve du monde?",
    options: ["Le Nil", "L'Amazone", "Le Yangtsé", "Le Mississippi"],
    correctAnswer: "L'Amazone",
    category: "culture générale",
  },
  {
    question:
      "Quel est le nom du célèbre monument en Inde construit par l'empereur Shah Jahan?",
    options: [
      "Le Taj Mahal",
      "Le Qutub Minar",
      "Le Fort Rouge",
      "Le Palais des Vents",
    ],
    correctAnswer: "Le Taj Mahal",
    category: "culture générale",
  },
  {
    question: "Quel est le nom du premier président des États-Unis?",
    options: [
      "George Washington",
      "Thomas Jefferson",
      "Abraham Lincoln",
      "John Adams",
    ],
    correctAnswer: "George Washington",
    category: "culture générale",
  },
  {
    question:
      "Quel est le nom du mouvement artistique fondé au début du 20e siècle, célèbre pour son abstraction et ses formes géométriques?",
    options: ["Surréalisme", "Cubisme", "Impressionnisme", "Expressionnisme"],
    correctAnswer: "Cubisme",
    category: "culture générale",
  },
  {
    question:
      "Quel est le nom du célèbre roman de George Orwell publié en 1949, décrivant un régime totalitaire fictif?",
    options: [
      "La Ferme des Animaux",
      "1984",
      "Les Misérables",
      "Brave New World",
    ],
    correctAnswer: "1984",
    category: "culture générale",
  },
  {
    question:
      "Quel est le nom du célèbre monument en France qui est une statue de la liberté située dans le port de New York?",
    options: [
      "La Statue de la Liberté",
      "Le Pont de Brooklyn",
      "L'Empire State Building",
      "La Tour Eiffel",
    ],
    correctAnswer: "La Statue de la Liberté",
    category: "culture générale",
  },
  {
    question:
      "Quel est le nom du personnage principal de la série de jeux 'The Legend of Zelda'?",
    options: ["Link", "Zelda", "Ganondorf", "Navi"],
    correctAnswer: "Link",
    category: "gaming",
  },
  {
    question:
      "Dans quel jeu vidéo pouvez-vous explorer un monde ouvert avec des blocs et des monstres appelés 'Creepers'?",
    options: ["Minecraft", "Terraria", "Fortnite", "Roblox"],
    correctAnswer: "Minecraft",
    category: "gaming",
  },
  {
    question:
      "Quel est le studio de développement derrière le jeu 'The Witcher 3: Wild Hunt'?",
    options: [
      "Bethesda Game Studios",
      "CD Projekt Red",
      "Ubisoft",
      "Rockstar Games",
    ],
    correctAnswer: "CD Projekt Red",
    category: "gaming",
  },
  {
    question:
      "Quel jeu de tir à la première personne se déroule dans la ville fictive de Los Santos?",
    options: [
      "Grand Theft Auto V",
      "Call of Duty: Modern Warfare",
      "Battlefield 1",
      "Overwatch",
    ],
    correctAnswer: "Grand Theft Auto V",
    category: "gaming",
  },
  {
    question: "Dans le jeu 'Among Us', quel est le rôle des 'Imposteurs'?",
    options: [
      "Terminer des tâches",
      "Trouver des indices",
      "Saboter et éliminer les coéquipiers",
      "Protéger le vaisseau spatial",
    ],
    correctAnswer: "Saboter et éliminer les coéquipiers",
    category: "gaming",
  },
  {
    question:
      "Quel jeu a popularisé le genre Battle Royale et a attiré une base de joueurs massive en 2017?",
    options: [
      "PUBG (PlayerUnknown's Battlegrounds)",
      "Apex Legends",
      "Fortnite",
      "Call of Duty: Warzone",
    ],
    correctAnswer: "Fortnite",
    category: "gaming",
  },
  {
    question:
      "Dans 'Super Mario Bros.', quel est l'objectif principal de Mario?",
    options: [
      "Collecter des pièces",
      "Sauver la princesse Peach",
      "Vaincre Bowser",
      "Explorer des niveaux",
    ],
    correctAnswer: "Sauver la princesse Peach",
    category: "gaming",
  },
  {
    question:
      "Quel est le nom du personnage principal dans la série de jeux 'Halo'?",
    options: ["Marcus Fenix", "Samus Aran", "Master Chief", "Gordon Freeman"],
    correctAnswer: "Master Chief",
    category: "gaming",
  },
  {
    question:
      "Dans 'The Elder Scrolls V: Skyrim', quel est le nom de la langue des dragons?",
    options: ["Tamrielic", "Daedric", "Dragonese", "Dovahzul"],
    correctAnswer: "Dovahzul",
    category: "gaming",
  },
  {
    question:
      "Quel jeu indépendant a été créé par le développeur Toby Fox et présente des mécanismes de jeu uniques où le joueur peut choisir de ne tuer aucun ennemi?",
    options: ["Stardew Valley", "Celeste", "Undertale", "Hollow Knight"],
    correctAnswer: "Undertale",
    category: "gaming",
  },
  {
    question:
      "Dans le jeu 'Overwatch', combien de joueurs sont dans chaque équipe lors d'un match standard?",
    options: ["4", "5", "6", "8"],
    correctAnswer: "6",
    category: "gaming",
  },
  {
    question:
      "Quel jeu de simulation de vie vous permet de construire et gérer votre propre ville et a été développé par Maxis?",
    options: ["SimCity", "The Sims", "Cities: Skylines", "Tropico"],
    correctAnswer: "SimCity",
    category: "gaming",
  },
  {
    question:
      "Dans quel jeu de rôle d'action pouvez-vous invoquer des créatures appelées 'Personas'?",
    options: ["Final Fantasy", "Persona 5", "Dark Souls", "Kingdom Hearts"],
    correctAnswer: "Persona 5",
    category: "gaming",
  },
  {
    question:
      "Quel est le jeu le plus vendu de tous les temps, dépassant les 200 millions de ventes?",
    options: ["Grand Theft Auto V", "Tetris", "Minecraft", "Wii Sports"],
    correctAnswer: "Minecraft",
    category: "gaming",
  },
  {
    question:
      "Dans 'League of Legends', combien de champions peuvent être sélectionnés par chaque équipe en mode de jeu standard?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "5",
    category: "gaming",
  },

  // Ajoutez plus de questions ici pour différentes catégories
];

// Insérer les quiz dans la base de données
Quiz.insertMany(quizzes)
  .then(() => {
    console.log("Les exemples de quiz ont été ajoutés à la base de données.");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Erreur lors de l'insertion des quiz:", err);
    mongoose.connection.close();
  });
