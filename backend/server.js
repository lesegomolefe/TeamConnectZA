const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const multer = require('multer');
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
  const { firstName, lastName, idNo, email, password } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (first_name, last_name, id_no, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [firstName, lastName, idNo, email, password]
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

// app.get('/api/complaints', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM complaints');
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// app.post('/api/complaints', async (req, res) => {
//   const { comp_about, date, comp_message, user_id } = req.body;
//   try {
//     const result = await pool.query(
//       'INSERT INTO complaints (comp_about, date, comp_message, user_id) VALUES ($1, $2, $3, $4) RETURNING *',
//       [comp_about, date, comp_message, user_id]
//     );
//     res.json(result.rows[0]);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });
// let complaints = [];
// let users = [
//   { id: 1, name: "Prince", surname: "Wits" },
//   { id: 2, name: "Letago", surname: "Tut" },
// ];

// // Routes
// app.get("/api/users", (req, res) => {
//   res.json(users);
// });

// app.get("/api/complaints", (req, res) => {
//   res.json(complaints);
// });

// app.post("/api/complaints", (req, res) => {
//   const newComplaint = {
//     id: complaints.length + 1,
//     ...req.body,
//     date: new Date(),
//   };
//   complaints.push(newComplaint);
//   res.status(201).json(newComplaint);
// });

// app.post('/add_complain', (req, res) => {
//   const complaint = req.body;
//   // Add logic to handle the complaint, e.g., save to database
//   res.status(200).send({ message: 'Complaint received', data: complaint });
// });

// new code
// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// Endpoint to fetch employees
app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM employees');
    res.json(result.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// Endpoint to fetch complaints
app.get('/api/complaints', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM complaints');
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

// Endpoint to upload a CV
app.post('/api/upload', upload.single('cv'), (req, res) => {
  try {
    res.json({ fileName: req.file.filename, filePath: `/uploads/${req.file.filename}` });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});
// Endpoint to fetch user profile
app.get('/api/profile', async (req, res) => {
  // Simulated user profile data
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

app.post('/complaintss', (req, res) => {
  const complaint = req.body;

  // Here, you can process the complaint, save it to a database, etc.
  console.log('Received complaint:', complaint);

  res.status(201).send('Complaint received successfully.');
});

// File upload endpoint
app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }
  res.send(`File uploaded: ${req.file.filename}`);
});
// In your Express.js backend
app.get('/api/complaints', (req, res) => {
  // Replace with your database fetching logic
  const complaints = [
    { id: 1, message: "Complaint 1" },
    { id: 2, message: "Complaint 2" },
  ];
  res.json(complaints);
});

app.get('/api/complaints/messages', async (req, res) => {
  try {
    const messages = await db.query('SELECT message FROM complaints'); // Adjust query as needed
    res.json(messages.rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));