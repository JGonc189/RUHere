const router = require('express').Router();
const passport = require('passport');

// auth login route
router.get('/login', (req, res) => {
    res.render('login');
});

// auth logout route
router.get('/logout', (req, res) => {
    //handle with passport.js
    res.send('logging out. . .');
});

// auth with google
router.get('/google', passport.authenticate('google', {scope: ['profile']}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
	res.send('You logged in!');
});

module.exports = router;