const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;


app.use(cors());
app.use(bodyParser.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password@12',
    database: 'College',
    port: 3300
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ', err.stack);
        return;
    }
    console.log('MySQL connected...');
});

// Login Route
app.post('/login', (req, res) => {
    const { e_id, email, password } = req.body;

    const query = 'SELECT * FROM users WHERE e_id = ? AND email = ? AND password = ?';
    db.query(query, [e_id, email, password], (err, results) => {
        if (err) {
            console.error('Query error: ', err);
            res.status(500).json({ success: false, message: 'Server error' });
            return;
        }

        if (results.length > 0) {
            res.json({
                success: true,
                role: results[0].role
            });
        } else {
            res.json({
                success: false,
                message: 'Invalid credentials'
            });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
