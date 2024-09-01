<!-- src/components/QuizQuestion.vue -->
<template>
  <div class="quiz-container">
    <!-- Si le quiz existe et que le score final n'est pas encore affiché -->
    <div v-if="quiz && !showFinalScore" class="question-card">
      <h2 class="question-text">{{ quiz.question }}</h2>
      <ul class="options-list">
        <li
          class="option-item"
          v-for="(option, index) in quiz.options"
          :key="index"
        >
          <div class="container">
            <label>
              <input
                name="e"
                type="radio"
                :value="option"
                v-model="selectedAnswer"
              />
              {{ option }}
            </label>
          </div>
        </li>
      </ul>
      <button class="submit-button" @click="submitAnswer">
        Soumettre la réponse
      </button>
      <p class="feedback-message" v-if="feedbackMessage">
        {{ feedbackMessage }}
      </p>
    </div>

    <!-- Si toutes les questions sont répondues, affiche le score final -->
    <div v-else-if="showFinalScore" class="final-score-card">
      <h2>Quiz terminé!</h2>
      <p>
        Vous avez répondu correctement à {{ score }} questions sur
        {{ totalQuestions }}.
      </p>
      <button class="submit-button" @click="restartQuiz">
        Recommencer le quiz
      </button>
    </div>

    <!-- Message d'erreur s'il n'y a pas de quiz à afficher -->
    <div v-else class="error-message">
      <p>Aucun quiz disponible ou erreur de chargement des données.</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      quizzes: [], // Liste de tous les quiz
      quiz: null, // Quiz actuel affiché
      selectedAnswer: "", // Réponse sélectionnée par l'utilisateur
      feedbackMessage: "", // Message de feedback après la soumission de la réponse
      answeredQuestions: new Set(), // Questions déjà répondues
      score: 0, // Score actuel
      totalQuestions: 0, // Nombre total de questions
      showFinalScore: false, // Indique si le score final doit être affiché
    };
  },
  created() {
    this.fetchQuizzes();
  },
  methods: {
    fetchQuizzes() {
      axios
        .get("http://localhost:5000/api/quizzes")
        .then((response) => {
          this.quizzes = response.data;
          this.totalQuestions = this.quizzes.length;
          if (this.totalQuestions > 0) {
            this.loadRandomQuiz();
          } else {
            console.error("Aucun quiz trouvé.");
          }
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des quiz :", error);
        });
    },
    loadRandomQuiz() {
      if (this.answeredQuestions.size === this.quizzes.length) {
        this.showFinalScore = true; // Affiche le score final lorsque toutes les questions sont répondues
        return;
      }

      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * this.quizzes.length);
      } while (this.answeredQuestions.has(randomIndex));

      this.quiz = this.quizzes[randomIndex];
      this.answeredQuestions.add(randomIndex);
      this.selectedAnswer = ""; // Réinitialise la réponse sélectionnée
      this.feedbackMessage = ""; // Réinitialise le message de feedback
    },
    submitAnswer() {
      if (this.selectedAnswer) {
        if (this.selectedAnswer === this.quiz.correctAnswer) {
          this.feedbackMessage = "Bonne réponse!";
          this.score++; // Incrémente le score pour une bonne réponse
        } else {
          this.feedbackMessage = `Mauvaise réponse! La bonne réponse était: ${this.quiz.correctAnswer}.`;
        }
        setTimeout(this.loadRandomQuiz, 2000); // Charge une nouvelle question après 2 secondes
      } else {
        this.feedbackMessage = "Veuillez sélectionner une réponse.";
      }
    },
    restartQuiz() {
      this.answeredQuestions.clear(); // Réinitialise les questions répondues
      this.score = 0; // Réinitialise le score
      this.showFinalScore = false; // Cache le score final
      this.loadRandomQuiz(); // Charge une nouvelle question
    },
  },
};
</script>

<style scoped>
.quiz-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
  padding: 20px;
}

.question-card,
.final-score-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 30px;
  max-width: 500px;
  width: 100%;
  text-align: center;
  animation: fadeIn 0.5s ease-in-out;
}

.question-text {
  font-size: 1.5em;
  color: #333;
  margin-bottom: 20px;
}

.options-list {
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
}

.option-item {
  margin-bottom: 15px;
}

.container {
  --s: 1em; /* control the size */
  --g: 10px; /* the gap */
  --c: #009688; /* the active color */

  display: grid;
  grid-auto-rows: 1fr;
  gap: var(--g);
  position: relative;
}
.container:before {
  content: "";
  position: absolute;
  height: calc(var(--s) / 2);
  left: calc(var(--s) / 4 + var(--_x, 0px));
  top: calc(var(--s) / 4);
  background: var(--c);
  border-radius: 50%;
  aspect-ratio: 1;
  transition: 0.4s, left cubic-bezier(0.1, -2000, 0.7, -2000) 0.4s;
}
.container label {
  display: inline-flex;
  line-height: var(--s);
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.container input {
  height: var(--s);
  aspect-ratio: 1;
  border: calc(var(--s) / 8) solid var(--_c, #939393);
  border-radius: 50%;
  outline-offset: calc(var(--s) / 10);
  padding: calc(var(--s) / 8);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  font-size: inherit;
  margin: 0;
  transition: 0.3s;
}
.container input:checked {
  --_c: var(--c);
}
.container:not(:has(input:checked)):before {
  --_i: -1;
  opacity: 0;
}
.container:has(input:checked):before {
  opacity: 1;
  transform: translateY(calc(var(--_i) * (var(--s) + var(--g))));
}
.container:has(label:nth-child(1) input:checked):before {
  --_i: 0;
  --_x: 0.02px;
}
.container:has(label:nth-child(2) input:checked):before {
  --_i: 1;
  --_x: 0.04px;
}
.container:has(label:nth-child(3) input:checked):before {
  --_i: 2;
  --_x: 0.06px;
}
.container:has(label:nth-child(4) input:checked):before {
  --_i: 3;
  --_x: 0.08px;
}
.container:has(label:nth-child(5) input:checked):before {
  --_i: 4;
  --_x: 0.1px;
}
/* and so on ..*/

.container input:disabled {
  background: linear-gradient(#939393 0 0) 50%/100% 20% no-repeat content-box;
  opacity: 0.5;
  cursor: not-allowed;
}
@media print {
  input[type="radio"] {
    -webkit-appearance: auto;
    -moz-appearance: auto;
    appearance: auto;
    background: none;
  }
}
@supports not selector(:has(*)) {
  .container:before {
    display: none;
  }
  .container input:checked {
    --_c: var(--c);
    background: var(--c) content-box;
  }
}

.submit-button {
  padding: 12px 20px;
  background-color: #1e88e5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #1565c0;
}

.feedback-message {
  font-weight: bold;
  margin-top: 20px;
  font-size: 1.2em;
  color: #d32f2f;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
