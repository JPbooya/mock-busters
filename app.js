import express from 'express';
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
  res.render(`home`, { gridElements });
});


app.get('/billing', (req, res) => {
  res.render(`billing`);
});
app.get('/movie-info', (req, res) => {
  res.render(`movieInfo`);
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
