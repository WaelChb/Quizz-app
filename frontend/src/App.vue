<!-- src/App.vue -->
<template>
  <div id="app">
    <QuizQuestion />
  </div>
</template>

<script>
import QuizQuestion from "./components/QuizQuestion.vue";

export default {
  components: {
    QuizQuestion,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}
</style>
