const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const exphbs = require('express-handlebars');
const passport = require('passport');
const session = require('express-session');
const morgan = require('morgan');


// Load config
dotenv.config({path: './config/config.env'})
//Passport config
require('./config/passport')(passport)

connectDB()

const app = express()

//Logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

// HandleBars anothjer time
// Add the word .engine after exphbs
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs'
    })
    )

// Static folder
    app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', '.hbs')

//Sessions 
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
    // cookie: {secure: true}
}))

//Passport middleware
app.use(passport.initialize())
app.use(passport.session())

//Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))
// app.use('/dashboard', require('./routes/index'))

const PORT = process.env.PORT || 8500

app.listen(PORT,console.log(`Server running in  ${process.env.NODE_ENV} mode on port ${PORT}`))
