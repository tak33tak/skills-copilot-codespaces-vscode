// Create web server
// Use express to create a web server
const express = require('express');
const app = express();

// Use body-parser to parse incoming request bodies
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Use the comments module
const comments = require('./comments');

// POST /comments
app.post('/comments', (req, res) => {
  // Get the comment from the request
  const newComment = req.body;

  // Add the comment to the module
  comments.push(newComment);

  // Send back the comment
  res.json(newComment);
});

// GET /comments
app.get('/comments', (req, res) => {
  // Send back the comments
  res.json(comments);
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});