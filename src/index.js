const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars'); 
const app = express();
const port = 3000;
const routes = require('./routes');

//http logger morgan 
app.use(morgan('combined'))
//urlencoded + json
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set("view engine", ".hbs");
app.set('views', path.join(__dirname, '/resources/views'));

//Route init       
routes(app);       

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});