const express = require('express');
const app = express();
const port = 3000;

// Seting the view engine to EJS
app.set('view engine', 'ejs');

// Serving static files from the 'public' directory
app.use(express.static('public'));

// Defining a route for the home page
app.get('/', (req, res) => {
  // Render the 'home' view (home.ejs)
  res.render('home');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
