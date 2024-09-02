const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const quizRoutes = require("./routes/quizRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api", quizRoutes);

// Connecter à MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/quizapp")
  .then(() => {
    console.log("Connecté à MongoDB");
  })
  .catch((err) => {
    console.error("Erreur de connexion à MongoDB:", err);
  });

// Définir une route simple pour tester
app.get("/", (req, res) => {
  res.send("Bienvenue dans l'application de quiz!");
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
