# Study Insights Dashboard

> *Because knowing how you study is just as important as studying itself.*

[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![Chart.js](https://img.shields.io/badge/Chart.js-4.x-FF6384?style=flat-square&logo=chart.js&logoColor=white)](https://www.chartjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## Overview

**Study Insights Dashboard** is a full-stack web application designed to help students take control of their learning habits. By logging daily study sessions — including subject, hours spent, and mood — students can uncover meaningful patterns in their productivity and make data-driven decisions about how they spend their study time.

Built as a portfolio project, this app demonstrates end-to-end full-stack development: from a RESTful backend API to interactive frontend visualizations — all tied together with real-time data insights.

---

## Features

| Feature | Description |
|---|---|
| **Log Study Sessions** | Add entries with subject name, hours studied, and mood rating |
| **Persistent Storage** | All data is saved to a local JSON file — no data lost on refresh |
| **Entry List View** | Browse all past study sessions in a clean, readable UI |
| **Bar Chart Visualization** | Visual breakdown of total study hours per subject using Chart.js |
| **Smart Insights** | Auto-generated analytics including most-studied subject, average hours, and average mood |

---

## Tech Stack

### Frontend:
- **HTML5** — Semantic markup and structure
- **CSS3 / SCSS** — Modular, maintainable styling
- **Vanilla JavaScript (ES6+)** — Dynamic UI and API interaction

### Backend:
- **Node.js** — JavaScript runtime
- **Express.js** — Lightweight REST API framework

### Data & Visualization:
- **JSON File Storage** — Lightweight, file-based persistence layer
- **Chart.js** — Interactive, responsive data visualizations

---

## Project Structure:

```
study-insights-dashboard/
│
├── public/                  # Frontend (served statically)
│   ├── index.html           # Main HTML page
│   ├── style.scss           # SCSS stylesheet
│   └── app.js               # Client-side JavaScript
│
├── server/                  # Backend
│   ├── routes/              # API route definitions
│   └── controllers/         # Business logic & data processing
│
├── data/                    # JSON data storage
│   └── entries.json         # Study session records
│
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites:

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation:

**1. Clone the repository**

```bash
git clone https://github.com/your-username/study-insights-dashboard.git
cd study-insights-dashboard
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npm start
```

**4. Open in your browser**

```
http://localhost:3000
```

> The JSON data file in `data/` will be created automatically on the first API call if it doesn't already exist.

---

## API Endpoints:

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/entries` | Fetch all study entries |
| `POST` | `/api/entries` | Add a new study entry |
| `GET` | `/api/insights` | Get aggregated analytics/insights |

### Sample Request — Add Entry

```json
POST /api/entries
Content-Type: application/json

{
  "subject": "Machine Learning",
  "hours": 2.5,
  "mood": 4
}
```

### Sample Response — Insights

```json
{
  "mostStudied": "Machine Learning",
  "averageHours": 2.1,
  "averageMood": 3.8
}
```

---

## 📈 Dashboard Preview:

```
┌─────────────────────────────────────────┐
│         Study Insights Dashboard        │
├─────────────────────────────────────────┤
│  📌 Most Studied:   Machine Learning    │
│  ⏱  Average Hours:  2.1 hrs/session     │
│  😊 Average Mood:   3.8 / 5             │ 
├─────────────────────────────────────────┤
│  [Bar Chart: Hours per Subject]         │
│                                         │
│  ML   ████████████  12.5 hrs           │
│  Math ██████        6.0 hrs            │
│  DSA  ████          4.0 hrs            │
└─────────────────────────────────────────┘
```

---

## Key Learning Outcomes:

This project was built to practice and demonstrate the following skills:

- **Full-Stack Integration** — Connecting a JavaScript frontend to a Node.js/Express backend via REST API calls
- **API Design** — Structuring clean, RESTful endpoints with proper request/response handling
- **Data Processing** — Aggregating and transforming raw JSON records into meaningful statistics
- **Data Visualization** — Rendering dynamic bar charts with Chart.js based on live data
- **Analytics Thinking** — Deriving actionable insights (averages, maximums) from structured datasets

---

## Future Improvements:

This project is actively being improved. Planned features include:

- [ ] **User Authentication** — Login/signup so multiple users can track their own data
- [ ] **MongoDB Integration** — Replace JSON file storage with a proper NoSQL database
- [ ] **AI-Powered Predictions** — Use ML models to forecast productivity based on past trends
- [ ] **Advanced UI/UX** — Polished design with animations, dark and light mode, and responsive layout
- [ ] **Weekly & Monthly Analytics** — Time-series views and trend analysis over longer periods
- [ ] **Export Reports** — Download study summaries as PDF or CSV

---

## Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## Author

**Sauryadeep Dutta**

[![GitHub](https://img.shields.io/badge/GitHub-sauryadeepdutta-181717?style=flat-square&logo=github)](https://github.com/sauryadeepdutta)

---

<div align="center">

*Built with ☕ and curiosity — as a step toward smarter, data-driven learning.*

⭐ **If you found this project useful, consider giving it a star!** ⭐

</div>
