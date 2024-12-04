const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const auth = require("./router/auth.js");

const app = express();
app.use(express.json());

app.use(cors());

app.get("/default-route", (req, res) =>
  res.json({ message: "Connection established." })
);

// #prettier-ignore
mongoose
  .connect(process.env.MONGO_KEY)
  .then(() => console.log("MongoDB connected."))
  .catch((error) => console.log(error, "MongoDB connection attempt failed."));

const PORT = 3000;

app.use("/api/users", auth);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
