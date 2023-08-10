const express = require('express');
const path = require('path');
const hbs = require('hbs');
const Register = require('./models/registers')
const  {json}  = require('express')


const app = express();
const port = process.env.PORT || 3000;
require('./db/conn')





const static_path = path.join(__dirname , '../public');
const template_path = path.join(__dirname , '../templates/views');
const partials_path = path.join(__dirname , '../templates/partials');


app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(express.static(static_path));
app.set('view engine', ' hbs');
app.set('views', template_path);
// app.set('view engine', 'html');
// app.engine('html', require('hbs').__express);

hbs.registerPartials(partials_path)



app.get('/',(req,res)=>{
    res.render('index.hbs')
})


app.get('/register',(req,res)=>{
    res.render('register.hbs')
})


app.post('/register', async (req,res)=>{

    const data={
        phone:req.body.phone,
        email:req.body.email,
        password:req.body.password,
       conformpassword:req.body.conformpassword
    }

    await Register.insertMany([data])

    res.render('index.hbs')
})

    // try{
    //     const password = req.body.password
    //     const cPassword = req.body.conformpassword

    //     if(password = cPassword){
    //         const registerEmployee = new Register({
    //             phone:req.body.phone,
    //             email:req.body.email,
    //             password:password,
    //             conformpassword:cPassword
    //         })
    //     const  registered = await registerEmployee.save();
    //     res.status(201).render('index.hbs')

    //     }else{
    //         res.send("password are not matching")
    //     }

    // }catch(error){
    //     res.status(400).send(error)

    // }
// })






app.listen(port , ()=>{
    console.log(`server is listen to port number ${port}`);
})
