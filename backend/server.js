const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRouter = require("./router/authRouter.js");

const app = express();
app.use(express.json());

app.use(cors());

app.get("/default-route", (req, res) =>
  res.json({ message: "[Backend] Connection established." })
);

// #prettier-ignore
mongoose
  .connect(process.env.MONGO_KEY)
  .then(() => console.log("MongoDB connected."))
  .catch((error) => console.log(error, "MongoDB connection attempt failed."));

const PORT = process.env.PORT || 3000;

app.use("/api/users", authRouter);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
