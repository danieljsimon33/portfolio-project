const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

app.get("/default-route", (req, res) =>
  res.json({ message: "Connection established." })
);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App running on port -  ${PORT}`);
});
