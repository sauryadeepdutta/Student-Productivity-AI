const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "../../data/data.json");

// Add Data
exports.addData = (req, res) => {
  const newEntry = req.body;

  // Read existing data
  const data = JSON.parse(fs.readFileSync(dataFilePath));

  // Add new entry
  data.push({
    ...newEntry,
    date: new Date().toISOString()
  });

  // Save back to file
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

  res.json({ message: "Data added successfully!" });
};

// Get Data
exports.getData = (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataFilePath));
  res.json(data);
};