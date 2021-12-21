const express = require("express");
const router = express.Router();
const serverless = require("serverless-http")
// const multer = require("multer")();
const data = require("./index.json");

const app = express();

router.get("/", (req, res, next) => {
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

app.use('/index', router);

export const handler = serverless(app);