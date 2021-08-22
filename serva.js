// "ejs" Partition emphasize
const ejs  = require('ejs');
const express = require('express');
const path = require('path');


const app = express();
const port = process.env.PORT || 9999;

// adding middelware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views/pages'));
app.use(express.static(path.join(__dirname, 'public')));

//request
app.use('/', require("./routes/routerx"));

//get request here
// later will move

app.listen(port, function() {console.log('heard on port 9999')});
