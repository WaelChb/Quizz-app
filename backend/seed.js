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
    question: "Quelle est la capitale de la France?",
    options: ["Paris", "Londres", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Quelle est la couleur du ciel par temps clair?",
    options: ["Bleu", "Rouge", "Vert", "Jaune"],
    correctAnswer: "Bleu",
  },
  {
    question: "Combien de jours y a-t-il dans une semaine?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7",
  },
  {
    question: "Qui a écrit 'Les Misérables'?",
    options: ["Victor Hugo", "Émile Zola", "Gustave Flaubert", "Albert Camus"],
    correctAnswer: "Victor Hugo",
  },
  {
    question: "Quelle planète est la plus proche du soleil?",
    options: ["Vénus", "Terre", "Mars", "Mercure"],
    correctAnswer: "Mercure",
  },
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
