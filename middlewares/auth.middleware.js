const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

exports.checkDuplicate = (req, res) => {
  User.findOne({ emailAddress: req.body.emailAddress }, (err, user) => {
    if (err) {
      return res.status(500).send({ message: err });
    }
    if (user) {
      return res
        .status(409)
        .send({ message: "Failed! Email address already in use!" });
    }
  });
};

exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).send({ message: "Unauthorized!" });
    req.decoded = decoded;
    next();
  });
};
