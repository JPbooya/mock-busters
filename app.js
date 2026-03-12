import express from 'express';
import mysql2 from 'mysql2';
import dotenv from 'dotenv';
/* DOCUMENTATION 
Movie data import

Currently the movie information is stored in a JavaScript file instead of a JSON file.
Using a JS module allows the data to be imported directly into the server without
additional parsing or configuration.

If the project later moves to a dynamic data source (JSON file, database, or API),
this import can be updated accordingly. */
import { moviesData } from './data/moviesData.js'; // Imports movie data from the data folder

dotenv.config();

const app = express();
const PORT = 3090;
app.set('view engine', 'ejs');
let curSelectedMovieIdx;

//middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// this is the image route string, it was suppose to be an array of many images, but currently only the one is used so it might appear unneccesary.
const gridElements = { imgString: "/images/mbLogo.png" };
const orders = []

// Pool of database connections
const pool = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
}).promise();


// Default route
app.get('/', (req, res) => {
  res.render(`home`, { gridElements, moviesData });
});


app.get('/billing', (req, res) => {

     res.render(`billing`, { movie: moviesData[curSelectedMovieIdx], index: curSelectedMovieIdx }); 
  // res.render(`billing`);
});

// login route
app.get('/login', (req, res) => {
  res.render('login');
});

// renders movie info page when a movie is clicked
app.get('/movie-info', (req, res) => {
  // console.log( req.query.index);
  curSelectedMovieIdx = req.query.index; // 

  res.render(`movieInfo`, { movie: moviesData[curSelectedMovieIdx], index: curSelectedMovieIdx });
});

app.get('/admin', async (req, res) => {
  let sql = 'SELECT orders.id AS id, customer, email, address, timestamp, movies.title AS title FROM orders JOIN movies ON orders.movie_id = movies.id ORDER BY timestamp DESC';
  const orders = await pool.query(sql);
  res.render(`admin`, { orders: orders[0] });
});

app.post('/submit', async (req, res) => {
  // JSON for displaying to client.
  const order = {
    firstName: req.body.fname,
    lastName: req.body.lname,
    email: req.body.email,
    city: req.body.cname,
    state: req.body.sname,
    zipcode: req.body.zname,
    timestamp: new Date()
  }

  // Array for saving to database
  const params = [
    order.firstName + " " + order.lastName, // Name
    order.email, // Email
    order.city,  // City
    order.state, // State
    order.zipcode, // Zipcode
    curSelectedMovieIdx, // Movie ID (not yet tracked)
  ]

  // CUSTOMER, ADDRESS, EMAIL, MOVIE_ID <--in that order
  const sql = `INSERT INTO orders (customer, email, city, state, zipcode, movie_id) VALUES (?,?,?,?,?,?)`

  // Try to save the data to the database
  try {
    const result = await pool.execute(sql, params);
    console.log('Order saved with ID:', result[0].insertId);
    res.render(`confirmation`, { order });
  } catch (e) {
    console.error('Error saving order:', e);
    res.status(500).send('Sorry, there was an error processing your order. Please try again.');
  }
});

// Developer testing connection
app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`)
});
