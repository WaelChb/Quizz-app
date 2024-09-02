// models/Quiz.js

const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  correctAnswer: { type: String, required: true },
  category: { type: String, required: true }, // Ajout du champ 'category'
});

module.exports = mongoose.model("Quiz", quizSchema);
