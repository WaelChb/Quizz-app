<template>
  <div class="category-container" v-if="!quizStarted">
    <h2>Choisissez une catégorie</h2>
    <select v-model="selectedCategory" @change="fetchQuizzes">
      <option value="">Sélectionner une catégorie</option>
      <option value="gaming">Gaming</option>
      <option value="culture générale">Culture Générale</option>
      <!-- Ajoutez d'autres catégories ici si nécessaire -->
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: "", // Catégorie sélectionnée par l'utilisateur
      quizStarted: false, // Indique si le quiz a commencé ou non
    };
  },
  methods: {
    fetchQuizzes() {
      if (this.selectedCategory) {
        this.quizStarted = true; // Le quiz commence, donc on masque le sélecteur de catégorie
        this.$emit("categorySelected", this.selectedCategory); // Émet l'événement vers le composant parent
      }
    },
  },
};
</script>

<style scoped>
.category-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: auto;
  text-align: center;
}

.category-container h2 {
  margin-bottom: 15px;
  font-size: 1.5em;
  color: #333;
}

.category-container select {
  padding: 10px;
  font-size: 1em;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, border-color 0.3s;
}

.category-container select:focus {
  outline: none;
  border-color: #007bff;
  background-color: #e9f7ff;
}

.category-container option {
  padding: 10px;
  font-size: 1em;
}
</style>
