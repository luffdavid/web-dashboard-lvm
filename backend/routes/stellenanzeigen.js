const express = require('express');
const router = express.Router();
const Stellenanzeige = require('../models/stellenanzeige');

// POST: Hinzufügen einer Stellenanzeige
router.post('/', async (req, res) => {
  try {
    const { title, arbeitszeit, arbeitsart, aufgaben, berufsbezeichnung } = req.body;

    const stellenanzeige = await Stellenanzeige.create({ title, arbeitszeit, arbeitsart, aufgaben, berufsbezeichnung})
    res.status(200).json(stellenanzeige);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Fehler beim Hinzufügen der Stellenanzeige', error });
  }
});

// DELETE: Löschen einer Stellenanzeige anhand der ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStellenanzeige = await Stellenanzeige.findByIdAndDelete(id);
    if (!deletedStellenanzeige) {
      res.status(404).json({ success: false, message: 'Stellenanzeige nicht gefunden' });
    } else {
      res.json({ success: true, message: 'Stellenanzeige erfolgreich gelöscht', stellenanzeige: deletedStellenanzeige });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Fehler beim Löschen der Stellenanzeige', error });
  }
});

// GET: Alle Stellenanzeigen abrufen
router.get('/', async (req, res) => {
  try {
    const stellenanzeigen = await Stellenanzeige.find();
    res.status(200).json(stellenanzeigen)
  } catch (error) {
    res.status(500).json({ success: false, message: 'Fehler beim Abrufen der Stellenanzeigen', error });
  }
});

module.exports = router;
