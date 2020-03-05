const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

//Passport
require("dotenv").config();
const session = require("express-session");
const passport = require("./config/passport");
app.use(
  session({
    secret: process.env.PASSPORT_SECRET,
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Nodemailer Body-Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
const options = {
  useNewUrlParser: true,
  useFindAndModify: false
};
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/RCFit7",
  options
);

// ROUTES
app.use(routes);

//Nodemailer
app.get("/", (req, res) => {
  res.send("hello");
});
app.post("/api/v1", (req, res) => {
  var data = req.body;

  var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "wooffte@gmail.com",
      pass: "4072019975"
    }
  });

  var mailOptions = {
    from: data.email,
    to: "kingffte@gmail.com",
    subject: "ENTER_YOUR_SUBJECT",
    html: `<p>${data.name}</p>
          <p>${data.email}</p>
          <p>${data.message}</p>`
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send("Success");
    }
    smtpTransport.close();
  });
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
