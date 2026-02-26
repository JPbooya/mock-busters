import express from 'express';
const app = express();

const PORT = 3100;

app.set('view engine', 'ejs');

//middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


const gridElements= {imgString: "/images/mbLogo.png", amount:20};

// Default route
app.get('/', (req,res) => {
  res.render(`home`, {gridElements});
});

app.get('/billing', (req,res) => {
  res.render(`billing`);
});

app.listen(PORT, () => {
  console.log(`server is running on port: http://localhost:${PORT}`)
});
