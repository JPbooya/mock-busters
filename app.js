import express from 'express';

/* omg this is so jank, i tried getting a simple json file to work
but there are too many hoops, so if we plan on doing hard coded movies this 
is the best i could do */
import { moviesData } from './data/moviesData.js'; // gets the movie info from a .js script in a data folder that i added 
const app = express();

const PORT = 3090;

app.set('view engine', 'ejs');

//middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


const gridElements = { imgString: "/images/mbLogo.png", amount: 20 };

const orders = []



// Default route
app.get('/', (req, res) => {
  res.render(`home`, { gridElements, moviesData });
});


app.get('/billing', (req, res) => {
  res.render(`billing`);
});

// renders movie info page when a movie is clicked
app.get('/movie-info', (req, res) => {
  res.render(`movieInfo`, { moviesData: moviesData });
});

app.get('/admin', (req, res) => {
  res.render(`admin`, { orders });
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
