const cfg = global.cfg = require('./lib/config')(__dirname);
const express = global.express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use('/', require('./lib/routes'));

app.get('/hello', (req, res) => {
  res.send('OK', 200)
})
console.log("Server Started")
console.log(process.env.NODE_ENV)
app.listen(3000, () => console.log("App running on port 3000"))
