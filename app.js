"use strict";
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authMiddleware = require("./middlewares/auth.middleware");
const mongodb = require("./services/mongodb");
mongodb.connect();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (_, res) => res.send("Welcome!"));
app.use("/auth", require("./routes/auth.route"));
app.use("/user", [authMiddleware.verifyToken], require("./routes/user.route"));
app.use((req, res) => {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
