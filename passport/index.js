const local = require('./localStrategy');
const {User} = require('../models');

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    console.log('serialize');
    done(null, user.id);
  });

  passport.deserializeUser((email, done) => {
    console.log('deserialize');
    User.findOne({
      where: { email },
    })
      .then(user => {
        console.log('user', user);
        done(null, user);
       })
      .catch(err => done(err));
  });

  local(passport);

};
