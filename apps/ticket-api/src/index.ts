import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (_req, res) => {
  res.send("Hello World from Ticket API 👋");
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
