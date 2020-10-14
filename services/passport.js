const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

//Tell Passport to use a new instance of the Google Strategy.
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = {
        _id: { $oid: "5f7ce7f831b08600172d3e35" },
        googleId: "117473288862417530287",
        __v: { $numberInt: "0" },
      };

      if (existingUser) {
        console.log("Existing user!");
        // we already have a record with given id
        return done(null, existingUser);
      }
      // we don't have a record with this id
      const newUser = await new User({ googleId: profile.id }).save();
      done(null, newUser);
    }
  )
);
