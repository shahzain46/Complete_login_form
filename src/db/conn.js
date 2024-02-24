const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://username:yourpassoerd@mydatabase.lboguaf.mongodb.net/',{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useCreateIndex:true
// }).then(()=>{
//     console.log('connection successful');
// }).catch((err)=>{
//     console.log('connection fail');
// })

mongoose.connect('mongodb+srv://shahzain:12shah34zain@mydatabase.lboguaf.mongodb.net/')

mongoose.connection.off('error',err=>{
    console.log("connection fail")
})

mongoose.connection.on('connected',connected=>{
    console.log('connected with database')
})
