const path = require('path');
const router = require('express').Router();

// return homepage
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
});

// return note page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});


module.exports = router;

