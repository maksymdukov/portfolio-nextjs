const path = require("path");
const dev = process.env.NODE_ENV !== "production";
if (dev) {
  require("dotenv").config({
    path: path.join(__dirname, ".env"),
  });
}

module.exports = {
  DB_URI: process.env.DB_URI,
  NAMESPACE: process.env.NAMESPACE,
  JWKS_URL: process.env.JWKS_URL,
  JW_AUDIENCE: process.env.JW_AUDIENCE,
  JW_ISSUER: process.env.JW_ISSUER,
};
