# 🎬 BookMyTicket

A full-stack movie and event booking platform with modern dark theme.

## 🌐 Live Demo

- **Website:** https://karthikmanivel06.github.io/bookmyticket-project/frontend-html/index.html
- **Backend API:** https://bookmyticket-project.vercel.app/api/movies

## ✨ Features

- Browse movies with posters and ratings
- Filter by language (Tamil, Hindi, English)
- Search movies by title, cast, or genre
- Theater and showtime selection
- Interactive seat booking
- Multiple payment methods
- Downloadable booking confirmation
- Event pass booking

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Hosting:** GitHub Pages (frontend), Vercel (backend), Aiven (database)

## 📁 Project Structure
bookmyticket-project/
├── backend/
│ ├── server.js
│ └── package.json
├── frontend-html/
│ ├── index.html
│ ├── theaters.html
│ ├── seats.html
│ ├── payment.html
│ ├── confirmation.html
│ └── event-booking.html
└── README.md

text

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/movies | Get all movies |
| GET | /api/movies/tamil | Tamil movies |
| GET | /api/movies/hindi | Hindi movies |
| GET | /api/movies/english | English movies |
| GET | /api/movies/trending | Trending movies |
| GET | /api/movies/:id | Movie by ID |

## 🚀 Run Locally

```bash
cd backend
npm install
npm start
Open frontend-html/index.html in browser.

📝 License
MIT License

👨‍💻 Author
Karthik Manivel

GitHub: @karthikmanivel06
