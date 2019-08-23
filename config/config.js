const { colors } = require("@material-ui/core");

module.exports = {
  port: "8080",
  jwt_key: "petar-ne-zna-da-radi-css",

  colors: {
    primary: "#ff9a60",
    secondary: "#3b84c0",

    error: "#c03b3b",

    background: {
      primary: "#1e2024",
      light: "#32393d"
    },

    text: {
      primary: colors.grey[200],
      secondary: colors.grey[500]
    }
  }
};
