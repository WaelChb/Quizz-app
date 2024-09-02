const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const quizRoutes = require("./routes/quizRoutes");
require("dotenv").config();

const app = express();

// Récupérer les variables d'environnement
const user = process.env.MONGO_DB_USER;
const password = process.env.MONGO_DB_PASSWORD;
const dbName = process.env.MONGO_DB_NAME;
const cluster = process.env.MONGO_DB_CLUSTER;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api", quizRoutes);

// Connecter à MongoDB
// Créer l'URI de connexion
const uri = `mongodb+srv://${user}:${password}@${cluster}/${dbName}?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Définir une route simple pour tester
app.get("/", (req, res) => {
  res.send("Bienvenue dans l'application de quiz!");
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
