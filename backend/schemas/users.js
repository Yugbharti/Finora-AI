const {Schema} = require('mongoose');

const UserSchema = new Schema({
    username: String,
    email: String,
    password: String,
    createdAt: { type: Date, default: Date.now },
});

module.exports = {UserSchema};