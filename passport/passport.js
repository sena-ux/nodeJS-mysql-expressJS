const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password) {
    let username = req.body.username;
    let password = req.body.password;
    if (username && password) {
        query = `SELECT * FROM login_siswa WHERE username = "${username}"`;

        db.query(query, (error, data) => {
            if (data.length > 0) {
                for (var i = 0; i > data.length; i++) {
                    if (data[i].kataSandi === password) {
                                 req.session.user_id = data[i].user_id;
                                 res.redirect("/")
                             } else{
                                 res.send("Incorrect Password")
                             }

                         }
                     } else {
                        res.send('Incorrect Username')
                        //  res.redirect('/login')
                     }
                     res.redirect('/');
        })
    } else {
        console.log("gagal")
            res.send('Please Enter Email Address and Password Details');
            res.end();
    }

    // Replace this with your own authentication logic
//     if (username === 'admin' && password === 'admin') {
//       return done(null, { id: 1, username: 'admin' });
//     } else {
//       return done(null, false, { message: 'Invalid username or password' });
//     }
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  // Replace this with your own database lookup logic
  if (id === 1) {
    return done(null, { id: 1, username: 'admin' });
  } else {
    return done(new Error('User not found'));
  }
});
