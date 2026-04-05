const express = require("express");
const router = express.Router();

const { addData, getData } = require("../controllers/dataController");

// POST → Add data
router.post("/add-data", addData);

// GET → Fetch data
router.get("/get-data", getData);

module.exports = router;