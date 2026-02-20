import express from 'express';
const app = express();

const PORT = 3100;

app.set('view engine', 'ejs');

//middleware
app.use(express.static("public"));


const gridElements= {imgString: "/images/mbLogo.png", amount:20};
// defualt route
app.get('/', (req,res) => {

  res.render(`home`, {gridElements});
})

app.listen(PORT, () => {
  console.log(`server is running on port: http://localhost:${PORT}`)
});
