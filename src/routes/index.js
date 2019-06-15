const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
	console.log("call path: " + req.path);
	next();
});

module.exports = router;
