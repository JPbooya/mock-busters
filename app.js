import express from 'express';
const app = express();

const PORT = 3090;

app.set('view engine', 'ejs');

//middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


const gridElements= {imgString: "/images/mbLogo.png", amount:20};

const orders = []

// Default route
app.get('/', (req,res) => {
  res.render(`home`, {gridElements});
});

app.get('/billing', (req,res) => {
  res.render(`billing`);
});

app.get('/admin', (req,res) => {
  res.send(orders);
});

app.post('/submit',(req,res) => {
  // const order = {
  //   firstName: req.body.fname,
  //   lastName: req.body.lname,
  //   address: req.body.aname,
  //   city: req.body.cname,
  //   state: req.body.sname,
  //   zipcode: req.body.zname,
  //   creditcard: req.body["credit-card-name"],
  //   expiration: req.body.exname,
  //   extension: req.body["expiration-name"],
  //   delivery: req.body.delivery,
  //   timestamp: new Date()
  // }
  res.render(`submit`)
});

app.listen(PORT, () => {
  console.log(`server is running on port: http://localhost:${PORT}`)
});
