const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
        res.redirect('/');
        return;
    } else {
        next();
    }
};

module.exports = withAuth;