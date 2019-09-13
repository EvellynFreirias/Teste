const express = require("express");
const router = express.Router();
const passport = require("passport");
const {users} = require('../helpers/auth')
const IndexController = require('../controller/IndexController');
const controller = new IndexController();


router.get('/', (req, res) => {
    controller.index(req, res)
});

router.post('/login', passport.authenticate('local-signin', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
    failureFlash: true
}
));

router.get('/pagenotfound', (req, res) => {
    controller.notfound(req, res);
})


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/signin');
}

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('sucess_msg', 'Deslogado com sucesso')
    res.redirect('/')
});

router.get('/dashboard', users, (req, res) => {
    controller.dashboard(req, res)
});


module.exports = router;