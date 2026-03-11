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
  port:  process.env.DB_PORT
}).promise();


// Default route
app.get('/', (req, res) => {
  res.render(`home`, { gridElements, moviesData });
});


app.get('/billing', (req, res) => {
  res.render(`billing`);
  /*adding this code will pass the selected movie info into billing page
   
   res.render(`billing`,  { movie: moviesData[curSelectedMovieIdx] }); 
    
    I left it commented to not alter more than my assigned tasks
    */
});

// login route
app.get('/login', (req, res) => {
  res.render('login');
});

// renders movie info page when a movie is clicked
app.get('/movie-info', (req, res) => {
  // console.log( req.query.index);
  curSelectedMovieIdx = req.query.index; // 

  res.render(`movieInfo`, { movie: moviesData[curSelectedMovieIdx] , index: curSelectedMovieIdx });
});

app.get('/admin', async (req, res) => {
  let sql = 'SELECT * FROM orders ORDER BY timestamp DESC';
  const orders = await pool.query(sql);
  res.render(`admin`, { orders: orders[0] });
});

app.post('/submit', (req, res) => {
  const order = {
    firstName: req.body.fname,
    lastName: req.body.lname,
    address: req.body.aname,
    city: req.body.cname,
    state: req.body.sname,
    zipcode: req.body.zname,
    creditcard: req.body["credit-name"],
    extension: req.body["extension-name"],
    expiration: req.body["exname"],
    delivery: req.body["dtd-name"],
    timestamp: new Date()
  }

  orders.push(order);

  res.render(`confirmation`, { order });
});

app.listen(PORT, () => {
  console.log(`server is running on port: http://localhost:${PORT}`)
});
