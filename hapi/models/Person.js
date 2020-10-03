const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const PersonSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    date: { type: Date, default: Date.now }
  });

  module.exports = Person = Mongoose.model('person', PersonSchema);