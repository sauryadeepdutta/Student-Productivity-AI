const express = require("express");
const router = express.Router();

const {
  addData,
  getData
} = require("../controllers/dataController");

router.post("/add-data", addData);
router.get("/get-data", getData);

module.exports = router;