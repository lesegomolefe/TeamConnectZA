const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Routes
app.post('/api/register', async (req, res) => {
  const { firstName, lastName, email, password,role } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (first_name, last_name, email, password, role) VALUES ($1, $2, $3, $4,$5) RETURNING *',
      [firstName, lastName, email, password,role]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      if (user.password === password) {
        res.json({ message: 'Login successful', user });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Endpoint to fetch complaints
app.get('/api/complaints', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM complaints ORDER BY date DESC');
    res.json(result.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// Endpoint to post a new complaint
app.post('/api/complaints', async (req, res) => {
  const { comp_about, comp_message, date, seen } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO complaints (comp_about, comp_message, date, seen) VALUES ($1, $2, $3, $4) RETURNING *',
      [comp_about, comp_message, date, seen]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// Endpoint to fetch user profile
app.get('/api/profile', async (req, res) => {
  // This is a placeholder. In a real application, you'd fetch this from the database
  const userProfile = {
    name: "Lesego Molefe",
    email: "lesego.molefe@example.com",
    phone: "+27123456789",
    bio: "I am a passionate software developer with expertise in React and Node.js.",
    skills: "php, java, html, js",
    profilePicture: "icon.jpg",
  };
  res.json(userProfile);
});



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));