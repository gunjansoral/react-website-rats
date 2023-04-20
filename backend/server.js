// server.js

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Endpoint to fetch image paths
app.get('/api/images', (req, res) => {
  // Directory path where the images are stored
  const directoryPath = path.join(__dirname, 'public/images/albums');

  // Read the directory contents
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      res.status(500).json({ error: 'Failed to fetch image paths' });
    } else {
      // Filter files to get only image files
      const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

      // Create an array of image paths
      const imagePaths = imageFiles.map(file => `/images/${file}`);

      res.json(imagePaths);
    }
  });
});

// Start the server
app.listen(5000, () => {
  console.log('Server started on http://localhost:5000');
});
