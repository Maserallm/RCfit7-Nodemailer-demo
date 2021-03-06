const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  isAdmin: {
    type: Boolean,
    default: false
  },
  isTrainer: {
    type: Boolean,
    default: false
  },
  firstName: {
    type: String,
    trim: true,
    required: "firstName is Required"
  },
  lastName: {
    type: String,
    trim: true,
    required: "lastName is Required"
  },
  birthday: {
    type: Date,
    required: "birthday is Required"
  },
  email: {
    type: String,
    required: 'Email address is required',
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
  },
  membership: {
    type: Schema.Types.ObjectId,
    ref: "Membership",
  },
  membershipStatus: {
    type: Boolean,
    default: false
  },
  created: { type: Date, required: true, default: Date.now() },
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
