module.exports = function(req, res, next){
  if(!req.user){
    req.flash('error', 'You must be logged in to view this page');
    res.redirect('/auth/login'); //Whoa! Not so fast!
  }
  else {
    next(); //Good to go! Proceed as planned!
  }
}
