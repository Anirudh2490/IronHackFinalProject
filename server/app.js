require('dotenv').config();
require('./configs/passport');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const passport = require('passport');
const authRoutes = require('./routes/auth-routes');
const userRoutes = require('./routes/user-routes');
const designerRoutes = require('./routes/designer-routes');
const fabricRoutes = require('./routes/fabric-routes');
const manufacturerRoutes = require('./routes/manufacturer-routes');
const productGalleryRoutes = require('./routes/product-gallery-routes');
const session = require('express-session');
const cors = require('cors');
const MongoStore = require('connect-mongo')(session);

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost/IronHack', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(session({
  secret: "some secret goes here",
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use(passport.initialize());
app.use(passport.session());

//DATABASE
// const models = require("./models");

// Express View engine setup

app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000']
}));

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

const index = require('./routes/index');
app.use('/', index);
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', designerRoutes);
app.use('/api', fabricRoutes);
app.use('/api', manufacturerRoutes);
app.use('/api', productGalleryRoutes);
module.exports = app;
app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/public/index.html");
});
module.exports = app;
