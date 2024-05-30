const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const db = require('../models');
const User = db.User;

// add function for user 'join'
// using email and password
// password is encrypted using bcrypt
// stored to the user table
// return status 200 if success
// return status 500 if error with message in json format

exports.join = (req, res) => {
    bcrypt.hash(req.body.password, 10, function(err, hash) {
        if(err) {
            return res.status(500).json({
                error: err
            });
        } else {
            User.create({
                email: req.body.email,
                password: hash
            }).then(() => {
                res.status(200).json({
                    message: 'User registered'
                });
            }).catch(err => {
                res.status(500).json({
                    error: err
                });
            });
        }
    });
};

// add function for user 'login'
// using passport.authenticate with local strategy
// return status 200 if success
// return status 500 if error with message in json format

exports.login = (req, res) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(500).json({
                error: err
            });
        }
        if (!user) {
            return res.status(500).json({
                error: 'Invalid credentials'
            });
        }
        req.logIn(user, (err) => {
            if (err) {
                return res.status(500).json({
                    error: err
                });
            }
            return res.status(200).json({
                message: 'Login successful'
            });
        });
    })(req, res);
};

// add function for user 'logout'
// using req.logout()
// return status 200 if success
// return status 500 if error with message in json format

exports.logout = (req, res) => {
    req.logout();
    return res.status(200).json({
        message: 'Logout successful'
    });
};
