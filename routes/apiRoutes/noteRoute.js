const router = require('express').Router();
const {createNewNote} = require('../../lib/notes')
const notes = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    if (results) {
        res.json(results);
    } else {
        res.send(404);
    }
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = createNewNote(req.body, notes);
    res.json(req.body);


});

router.delete(`/api/notes:id`, (req, res) => {
    let results = notes;
    if (results) {
        res.json(results);
    } else {
        res.send(404);
    }
});

module.exports = router;
