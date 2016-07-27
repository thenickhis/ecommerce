

exports.post = function(req, res){
  req.assert('email', 'Enter email').notEmpty().isEmail();
  req.assert('username', 'Enter username').notEmpty().isAlphanumeric().len(3,20);
  req.assert('password', 'Enter password').notEmpty().notContains(' ').len(5,20);

  res.locals.err = req.validationErrors(true);

  if ( res.locals.err ) {
    res.render('signup', { message: { error: 'Woops, looks like we need more info...'} });
    return;
  }

  ...//save
};