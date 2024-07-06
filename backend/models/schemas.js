const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const Users = mongoose.model('Users', userSchema, 'users');

const mySchemas = { Users };

module.exports = mySchemas;