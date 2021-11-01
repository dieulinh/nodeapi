var express = require('express');
const app = express();


app.get('/', (req, res)=> {
  res.send("OK");
});
app.get('/hello', (req, res) => {
  res.send("Hello")
})
console.log("Server Started")
console.log(process.env.NODE_ENV)
app.listen(3000, () => console.log("App running on port 3000"))
