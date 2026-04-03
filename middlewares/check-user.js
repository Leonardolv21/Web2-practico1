exports.checkUser = (req, res, next) =>{
    if (!req.session.user){
        res.redirect('/login');
        return;
    }
    console.log("Ususario Logueado:", req.session.user);
    res.locals.userEmail = req.session.user.email;
    req.locals.userId = req.session.user.id;
    next();
}