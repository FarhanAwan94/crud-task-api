const mongoose =require('mongoose');

mongoose.Promise=global.Promise;

mongoose.connect('mongodb://localhost:27017/taskManagerdb')
.then(()=>{console.log("DB Connected SucessFully")})
.catch((error)=>{console.log(error)});

module.exports=mongoose;