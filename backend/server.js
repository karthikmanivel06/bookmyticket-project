const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mysql = require('mysql2');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password123',
    database: 'bookmyticket'
});

db.connect((err) => {
    if (err) {
        console.error('❌ Database connection failed:', err);
        return;
    }
    console.log('✅ Connected to MySQL database');
});

// ========== MOVIE API ==========

// 1. Get all movies
app.get('/api/movies', (req, res) => {
    const sql = 'SELECT * FROM movies ORDER BY release_date DESC';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});

// 2. Get Tamil movies
app.get('/api/movies/tamil', (req, res) => {
    const sql = 'SELECT * FROM movies WHERE language = "Tamil" ORDER BY rating DESC';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});

// 3. Get Hindi movies
app.get('/api/movies/hindi', (req, res) => {
    const sql = 'SELECT * FROM movies WHERE language = "Hindi" ORDER BY rating DESC';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});

// 4. Get English movies
app.get('/api/movies/english', (req, res) => {
    const sql = 'SELECT * FROM movies WHERE language = "English" ORDER BY rating DESC';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});

// 5. Get trending movies
app.get('/api/movies/trending', (req, res) => {
    const sql = 'SELECT * FROM movies WHERE is_trending = TRUE ORDER BY rating DESC';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});

// 6. Get movies by actor
app.get('/api/movies/actor/:name', (req, res) => {
    const sql = 'SELECT * FROM movies WHERE cast LIKE ? ORDER BY release_date DESC';
    db.query(sql, [`%${req.params.name}%`], (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});

// 7. Get movie by ID
app.get('/api/movies/:id', (req, res) => {
    const sql = 'SELECT * FROM movies WHERE id = ?';
    db.query(sql, [req.params.id], (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Movie not found' });
            return;
        }
        res.json(results[0]);
    });
});

// ========== HOME ROUTE ==========

app.get('/', (req, res) => {
    res.json({ 
        message: '🎬 BookMyTicket API is running!',
        endpoints: {
            allMovies: '/api/movies',
            tamilMovies: '/api/movies/tamil',
            hindiMovies: '/api/movies/hindi',
            englishMovies: '/api/movies/english',
            trending: '/api/movies/trending',
            vijayMovies: '/api/movies/actor/Vijay',
            ajithMovies: '/api/movies/actor/Ajith',
            movieById: '/api/movies/1'
        }
    });
});

// ========== START SERVER ==========

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
    console.log(`🌐 Test URLs:`);
    console.log(`   http://localhost:${PORT}/api/movies`);
    console.log(`   http://localhost:${PORT}/api/movies/tamil`);
    console.log(`   http://localhost:${PORT}/api/movies/actor/Vijay`);
});