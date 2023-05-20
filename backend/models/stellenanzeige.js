const mongoose = require('mongoose');

// Definieren Sie das Stellenanzeige-Schema
const stellenanzeigeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  arbeitszeit: {
    type: String,
    required: true
  },
  arbeitsart: {
    type: String,
    required: true
  },
  aufgaben: {
    type: String,
    required: true
  },
  berufsbezeichnung: {
    type: String,
    required: true
  }
});

// Erstellen Sie das Stellenanzeige-Modell
module.exports = mongoose.model('Stellenanzeige', stellenanzeigeSchema)