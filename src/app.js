const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;
require('./db/conn')



const static_path = path.join(__dirname , '../public');
const template_path = path.join(__dirname , '../templates/views');
const partials_path = path.join(__dirname , '../templates/partials');


app.use(express.static(static_path));
app.set('view engine', ' hbs');
app.set('views', template_path);
// app.set('view engine', 'html');
// app.engine('html', require('hbs').__express);

hbs.registerPartials(partials_path)



app.get('/',(req,res)=>{
    res.render('index.hbs')
})






app.listen(port , ()=>{
    console.log(`server is listen to port number ${port}`);
})
