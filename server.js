const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  port:'8081',
  user: 'root',
  password: '',
  database: 'farmers',
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Query MySQL database to find user by username and password
  db.query('SELECT * FROM customers WHERE Cus_email  = ? AND password = ?', [username, password], (err, results) => {
    if (err) {
      console.error('Error querying MySQL:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (results.length === 0) {
      // If user is not found or password is incorrect, send error response
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // If user is found and password is correct, send success response
    res.status(200).json({ message: 'Login successful', user: results[0] });
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
