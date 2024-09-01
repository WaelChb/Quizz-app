const { defineConfig } = require("@vue/cli-service");
// frontend/vue.config.js
module.exports = {
  devServer: {
    proxy: "http://localhost:5000",
  },
};
