const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");
const {UserSchema} = require('../schemas/users');
UserSchema.plugin(passportLocalMongoose);
const UserModel = mongoose.model('User', UserSchema);


module.exports = {UserModel};