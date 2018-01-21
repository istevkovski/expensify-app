const path = require('path');
var express = require('express');
var app = express();
const publicPath = path.join(__dirname, "..", "public");
//Variable for Heroku - his port value
const port = process.env.PORT || 3000; 
//port => Heroku.port (if it exists), else our 3000 local port

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
}); //* means all that don't match

app.listen(port, () => {
  console.log('Server is up!');
});
//3000 - port (for Local testing)