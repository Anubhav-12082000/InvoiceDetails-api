import express, { Router } from "express";
import serverless from "serverless-http";

const app = express();
const router = Router();

router.get("/", (req, res) => {
  const value = req.query.value;
  res.json({
    hello: "hi",
    value: value,
  });
});

app.use("/.netlify/functions/api", router);

export const handler = serverless(app);
