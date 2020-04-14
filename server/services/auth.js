const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const config = require("../config");
const NAMESPACE = config.NAMESPACE;

// MIDDLEWARE
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 50,
    jwksUri: config.JWKS_URL,
  }),
  audience: config.JW_AUDIENCE,
  issuer: config.JW_ISSUER,
  algorithms: ["RS256"],
});

exports.checkRole = (role) => (req, res, next) => {
  const user = req.user;

  if (user && user[NAMESPACE + "/role"] && user[NAMESPACE + "/role"] === role) {
    next();
  } else {
    return res.status(401).send({
      title: "Not Authorized",
      detail: "You are not authorized to access this data",
    });
  }
};
