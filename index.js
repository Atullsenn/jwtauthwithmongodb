require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 5000;
const cors = require('cors');
const db = require('./config/dbConnection');
const morgan = require('morgan');
const path = require('path');





// connect to database
db()

// express app
const app = express();


//setup view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));




// route
const userRoute = require('./routes/userRoute')
app.use('/api/v1', userRoute)


//auth route
const authRoute = require('./routes/authRoute');
app.use('/', authRoute);





app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})