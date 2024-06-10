const mongoose = require('mongoose');

const connectDb = async()=>{
    try{
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/nodedb07');
        
        console.log(`Database connected : ${conn.connection.host}`)

    }
    catch(err){

        console.log(`Database not connected: ${err}`)

    }
}

module.exports = connectDb;