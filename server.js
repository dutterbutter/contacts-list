const express        = require('express');
const mongoose       = require('mongoose');
const cors           = require('cors');
const axios          = require('axios');
const cookieSession  = require('cookie-session');
const session        = require('express-session')
const cookieParser   = require('cookie-parser')
const bodyParser     = require('body-parser');
const passport       = require('passport');
const Contactsdb     = require('./model/Contactdb');
const UsersModel     = require('./model/Users');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//const loginRequired  = require('./middlewares/loginRequired');
const keys           = require('./config/keys');
require('./services/passport');

PORT = process.env.PORT || 8080 

app = express();
// app.use(express.cookieParser());
// app.use(express.bodyParser());
// app.use(express.session({ secret: 'anything' }));



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);
require('./routes/contactRoutes')(app);

const MONGO_CONNECTION_STRING = 'mongodb://localhost:27017/data'
mongoose.connect(MONGO_CONNECTION_STRING);
const connection = mongoose.connection;



connection.on("open", () => {
    console.log("We are connected to mongo!");
    app.listen(PORT, _ => {
        console.log(`Express listening on ${PORT}, ctrl+c to kill`)
    })
})

