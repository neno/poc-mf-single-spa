import express from "express";
import cors from "cors";

const app = express();
const port = 31000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from bff");
});

let counter = 0;

app.get("/counter", (req, res) => {
  counter += 1;
  const result = JSON.stringify({ counter })
  res.send(result);
});

app.listen(port, () => {
  console.log(`bff listening at http://localhost:${port}`);
});
