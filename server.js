const express = require('express');
const {v4: uuid} = require('uuid');

const app = express();

app.get('/api/todos', (req, res) => {
  const todos = [
    { task: 'Software Engineering: Code for 4 Hours', id: uuid(), completed: false },
    { task: 'E-Commerce: Work on Business for 2 Hours', id: uuid(), completed: false },
    { task: 'Financials: Study Crypto/Investing/Personal Finance for 1 Hour', id: uuid(), completed: false },
    { task: 'Freelance Developer: Apply to Jobs/Gigs for 1 Hour', id: uuid(), completed: false },
    { task: 'Aesthetics: Max Hype - Chest/Arms Workout', id: uuid(), completed: false },
    { task: 'Martial Arts: Attend BJJ Fundamentals', id: uuid(), completed: false },
    { task: 'Language Learning: Study Japanese for 1 Hour', id: uuid(), completed: false },
    { task: 'Other: Read 10 Pages of Personal Development Book', id: uuid(), completed: false }
  ];

  res.json(todos);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));