// Create web server
const express = require('express');
const app = express();
const path = require('path');

// Set up the server
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Set up the comments array
let comments = [];

// Set up the route
app.get('/comments', (req, res) => {
  res.status(200).json(comments);
});

app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.status(201).json(newComment);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
}); 

