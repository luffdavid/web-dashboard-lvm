const express = require('express');
const router = express.Router();
const Rezension = require('../models/rezension');

// POST: Hinzufügen einer Rezension
router.post('/', async (req, res) => {
  try {
    const { name, bewertung, text } = req.body;

    const rezension = await Rezension.create({ name, bewertung, text })
    res.status(200).json(rezension);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Fehler beim Hinzufügen der Rezension', error });
  }
});

// DELETE: Löschen einer Rezension anhand der ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRezension = await Rezension.findOneAndDelete({_id: id})
    if (!deletedRezension) {
      res.status(404).json({ success: false, message: '2Rezension nicht gefunden' });
    } else {
    return  res.status(200).json(deletedRezension);
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Fehler beim Löschen der Rezension', error });
  }
});

// GET: Alle Rezensionen abrufen
router.get('/', async (req, res) => {
  try {
    const rezensionen = await Rezension.find();
    res.status(200).json(rezensionen)
  } catch (error) {
    res.status(500).json({ success: false, message: 'Fehler beim Abrufen der Rezensionen', error });
  }
});

module.exports = router;
