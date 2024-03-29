const Authentication = require('./controllers/authentication');
const passportServie = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session: false})  // if user is already authenticated, don't create the separate session
const requireSignin = passport.authenticate('local', {session: false});

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res) {
    res.send({hi: 'there'});
  });
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
}