const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {v4: uuid} = require('uuid');

const todos = require('./routes/api/todos');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// app.get('/api/todos', (req, res) => {
//   const todos = [
//     { task: 'Aesthetics: Max Hype - Chest/Arms Workout', id: uuid(), completed: false },
  //   { task: 'Martial Arts: Attend BJJ Fundamentals', id: uuid(), completed: false },
  //   { task: 'Software Engineering: Code for 4 Hours', id: uuid(), completed: false },
  //   { task: 'E-Commerce: Work on Business for 2 Hours', id: uuid(), completed: false },
  //   { task: 'Sole Proprietor (Freelance): Apply to Jobs/Gigs for 1 Hour', id: uuid(), completed: false },
  //   { task: 'Financial Advising: Read 10 Pages of Personal Development Book', id: uuid(), completed: false },
  //   { task: 'Financials: Study Crypto/Investing/Personal Finance for 1 Hour', id: uuid(), completed: false },
  //   { task: 'Language Learning: Study Japanese for 1 Hour', id: uuid(), completed: false }
  // ];

//   res.json(todos);
// });

// {
//   "task": "Martial Arts: Attend BJJ Fundamentals", 
//   "task": "Software Engineering: Code for 4 Hours", 
//   "task": "E-Commerce: Work on Business for 2 Hours", 
//   "task": "Sole Proprietor (Freelance): Apply to Jobs/Gigs for 1 Hour",
//   "task": "Financial Advising: Read 10 Pages of Personal Development Book", 
//   "task": "Financials: Study Crypto/Investing/Personal Finance for 1 Hour", 
//   "task": "Language Learning: Study Japanese for 1 Hour"
// }

// Use Routes
app.use('/api/todos', todos);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));