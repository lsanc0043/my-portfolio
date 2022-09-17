import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from "node-fetch";

const app = express();
const PORT = 4300;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to my website");
});

app.listen(PORT, () => console.log(`Hello, you are listening on port ${PORT}`));
