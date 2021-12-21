const express = require("express");
const router = express.Router();
const serverless = require("serverless-http");
const data = require("./index.json");
var cors = require("cors");

const app = express();

router.get("/", cors(), (req, res, next) => {
  const requestData = {
    pageNumber: req.query.pageNumber,
    pageSize: req.query.pageSize,
  };

  let returnData = data.slice(
    (requestData.pageNumber - 1) * requestData.pageSize,
    requestData.pageNumber * requestData.pageSize
  );

  if (returnData) res.send(returnData);
  else res.send([]);
});

app.use("/.netlify/functions/invoice", router);

export const handler = serverless(app);
