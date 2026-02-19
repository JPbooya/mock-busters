import express from 'express';
const app = express();
app.set('view engine', 'ejs');

const PORT = 3100;
// defualt route
app.get('/', (req,res) => {
  res.render(`home`);
})

app.listen(PORT, () => {
  console.log(`server is running on port: http://localhost:${PORT}`)
});