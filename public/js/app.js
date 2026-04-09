const form = document.getElementById("study-form");
const dataList = document.getElementById("data-list");
const insightsDiv = document.getElementById("insights");

let chart;

// LOAD DATA
async function loadData() {
  const res = await fetch("/api/get-data");
  const data = await res.json();

  renderList(data);
  renderChart(data);
  generateInsights(data);
}

// LIST
function renderList(data) {
  dataList.innerHTML = "";

  data.forEach(entry => {
    const li = document.createElement("li");
    li.textContent = `${entry.subject} - ${entry.hours} hrs (Mood: ${entry.mood})`;
    dataList.appendChild(li);
  });
}

// CHART
function renderChart(data) {
  const canvas = document.getElementById("studyChart");
  const ctx = canvas.getContext("2d");

  const subjectTotals = {};

  data.forEach(entry => {
    subjectTotals[entry.subject] =
      (subjectTotals[entry.subject] || 0) + entry.hours;
  });

  const labels = Object.keys(subjectTotals);
  const values = Object.values(subjectTotals);

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "Study Hours",
        data: values,
        backgroundColor: [
          "#ff6b6b",
          "#4dabf7",
          "#ffd43b",
          "#63e6be",
          "#b197fc"
        ]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: { color: "white" }
        }
      },
      scales: {
        x: {
          ticks: { color: "white" }
        },
        y: {
          beginAtZero: true,
          ticks: { color: "white" }
        }
      }
    }
  });
}

// INSIGHTS (REAL DATA SCIENCE LOGIC)
function generateInsights(data) {
  if (data.length === 0) {
    insightsDiv.innerHTML = "No data yet.";
    return;
  }

  let totalHours = 0;
  let subjectTotals = {};
  let moodTotal = 0;

  data.forEach(entry => {
    totalHours += entry.hours;
    moodTotal += entry.mood;

    subjectTotals[entry.subject] =
      (subjectTotals[entry.subject] || 0) + entry.hours;
  });

  const avgHours = (totalHours / data.length).toFixed(2);
  const avgMood = (moodTotal / data.length).toFixed(2);

  const bestSubject = Object.keys(subjectTotals).reduce((a, b) =>
    subjectTotals[a] > subjectTotals[b] ? a : b
  );

  insightsDiv.innerHTML = `
    <h3>📌 Insights</h3>
    <p>🔥 Most Studied Subject: <b>${bestSubject}</b></p>
    <p>⏱ Average Study Hours: <b>${avgHours}</b></p>
    <p>😊 Average Mood: <b>${avgMood}</b></p>
  `;
}

// FORM SUBMIT
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const subject = document.getElementById("subject").value;
  const hours = document.getElementById("hours").value;
  const mood = document.getElementById("mood").value;

  await fetch("/api/add-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ subject, hours, mood })
  });

  form.reset();
  loadData();
});

// INIT
loadData();