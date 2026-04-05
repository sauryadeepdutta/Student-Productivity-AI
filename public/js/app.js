const form = document.getElementById("study-form");
const dataList = document.getElementById("data-list");

let chart; // to store chart instance

// Fetch and display data
async function loadData() {
  const res = await fetch("/api/get-data");
  const data = await res.json();

  // Clear list
  dataList.innerHTML = "";

  let subjects = {};
  
  data.forEach(entry => {
    // Show list
    const li = document.createElement("li");
    li.textContent = `${entry.subject} - ${entry.hours} hrs (Mood: ${entry.mood})`;
    dataList.appendChild(li);

    // Prepare chart data
    if (!subjects[entry.subject]) {
      subjects[entry.subject] = 0;
    }
    subjects[entry.subject] = (subjects[entry.subject] || 0) + parseInt(entry.hours);
  });

  renderChart(subjects);
}

// Render Chart
function renderChart(subjectData) {
  const canvas = document.getElementById("studyChart");

  if (!canvas) {
    console.log("Canvas not found");
    return;
  }

  const ctx = canvas.getContext("2d");

  const labels = Object.keys(subjectData);
  const values = Object.values(subjectData);

  console.log("FINAL Labels:", labels);
  console.log("FINAL Values:", values);

  // 🚨 Force test if data somehow empty
  if (labels.length === 0) {
    console.log("No data → using fallback");
    labels.push("Test");
    values.push(5);
  }

  // Destroy previous chart safely
  if (chart) {
    chart.destroy();
    chart = null;
  }

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
  label: "Study Hours",
  data: values,
  backgroundColor: [
    "rgba(255, 99, 132, 0.7)",
    "rgba(54, 162, 235, 0.7)",
    "rgba(255, 206, 86, 0.7)",
    "rgba(75, 192, 192, 0.7)",
    "rgba(153, 102, 255, 0.7)"
  ],
  borderRadius: 8
}]
    },
    options: {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: "white"
      }
    }
  },
  scales: {
    x: {
      ticks: {
        color: "white"
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: "white"
      }
    }
  }
}
  });
}

// Handle form submit
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const subject = document.getElementById("subject").value;
  const hours = document.getElementById("hours").value;
  const mood = document.getElementById("mood").value;

  const data = { subject, hours, mood };

  await fetch("/api/add-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  form.reset();
  loadData(); // refresh UI
});

// Load data on page start
async function loadData() {
  const res = await fetch("/api/get-data");
  const data = await res.json();

  console.log("Fetched Data:", data); // 🔍 DEBUG

  dataList.innerHTML = "";

  let subjects = {};
  
  data.forEach(entry => {
    const li = document.createElement("li");
    li.textContent = `${entry.subject} - ${entry.hours} hrs (Mood: ${entry.mood})`;
    dataList.appendChild(li);

    subjects[entry.subject] = (subjects[entry.subject] || 0) + parseInt(entry.hours);
  });

  console.log("Processed Chart Data:", subjects); // 🔍 DEBUG

  renderChart(subjects);
}