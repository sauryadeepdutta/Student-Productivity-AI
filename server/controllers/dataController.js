const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../../data/data.json");

exports.addData = (req, res) => {
  const newEntry = req.body;

  const data = JSON.parse(fs.readFileSync(filePath));

  data.push({
    ...newEntry,
    hours: Number(newEntry.hours),
    mood: Number(newEntry.mood),
    date: new Date().toISOString()
  });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  res.json({ message: "Data saved successfully" });
};

exports.getData = (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  res.json(data);
};