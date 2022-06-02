const { resolve } = require("path");
 
module.exports = {
  base: "./", //set base here or in the build command
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        game: resolve(__dirname, "game.html"),
        insights: resolve(__dirname, "insights.html"),
        screen: resolve(__dirname, "titleScreen.html"),
        screens: resolve(__dirname, "endScreen.html"),
        instruction: resolve(__dirname, "instruction.html"),
      },
    },
  },
};