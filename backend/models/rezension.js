const mongoose = require('mongoose');

// Definieren Rezensionen-Schema
const rezensionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  bewertung: {
    type: Number,
    required: true
  },
  text: {
    type: String,
    required: true,
  }
});

// Erstellen des Rezension-Modells
module.exports = mongoose.model('Rezension', rezensionSchema)