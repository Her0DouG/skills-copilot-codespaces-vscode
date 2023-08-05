// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Array to hold comments
let comments = [];

// Read comments from file
fs.readFile('comments.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        comments = JSON.parse(data);
    }
});

// Get all comments
app.get('/api/comments', (req, res) => {
    res.json(comments);
});

// Post a new comment
app.post('/api/comments', (req, res) => {
    const newComment = req.body;
    comments.push(newComment);
    fs.writeFile('comments.txt', JSON.stringify(comments), 'utf8', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Comments saved to file.');
        }
    });
    res.json(newComment);
});

// Start the server
app.listen(port, () => console.log(`App listening on port ${port}`));