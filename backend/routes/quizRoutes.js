// routes/quizRoutes.js
const express = require("express");
const Quiz = require("../models/Quiz");

const router = express.Router();

// Créer un nouveau quiz
router.post("/quizzes", async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).send(quiz);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Lire tous les quiz
router.get("/quizzes", async (req, res) => {
  try {
    const quizzes = await Quiz.find({});
    res.send(quizzes);
  } catch (error) {
    res.status(500).send();
  }
});

// Lire un quiz par ID
router.get("/quizzes/:id", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).send();
    }
    res.send(quiz);
  } catch (error) {
    res.status(500).send();
  }
});

// Mettre à jour un quiz par ID
router.patch("/quizzes/:id", async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!quiz) {
      return res.status(404).send();
    }
    res.send(quiz);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Supprimer un quiz par ID
router.delete("/quizzes/:id", async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndDelete(req.params.id);
    if (!quiz) {
      return res.status(404).send();
    }
    res.send(quiz);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
