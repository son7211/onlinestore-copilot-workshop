const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');

const dotenv = require('dotenv');
const passport = require('passport');

dotenv.config();

const sequelize = require('./models').sequelize;
const passportConfig = require('./passport');


const authRouter = require('./routes/auth');
const productRouter = require('./routes/products');

const app = express();
app.use(cors());

sequelize.sync({ force: false })
  .then(() => {
    console.log('DB connection success.');
  })
  .catch((err) => {
    console.error(err);
  });


passportConfig(passport); 

app.set('port', process.env.PORT || 8001);

app.use(morgan('dev'));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));
app.use(passport.initialize());
app.use(passport.session());

app.use( authRouter);
app.use( productRouter);

app.use((req, res, next) => {
  const error =  new Error(`${req.method} ${req.url} No router.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.json('error');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), 'server is running.');
});
