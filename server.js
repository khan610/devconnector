const express = require('express');
const connectDB = require('./config/db');
const { connect } = require('mongoose');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port ${PORT}'));

// User API Routes
// 2. 1:59 Request and Body Validation
// 2. 03:39 Express Validator
// 2. 07:32
// 3. 11:20
// 4. 00:29
// 4. 07:02
// 5. 07:42
// 5. 11:21
// 6. 06:54
//
//Profile API Routes
//
//
//
//
//
//
//
