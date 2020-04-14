const env = require("./config/client-env.js");

module.exports = {
  presets: ["next/babel"],
  plugins: [["transform-define", env]],
};
