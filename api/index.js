import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Server also running on port 3000");
});
