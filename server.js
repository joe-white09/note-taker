const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 3001;
const app = express();
const htmlRoutes = require('./routes/htmlRoutes/index');
const apiRoutes = require('./routes/apiRoutes/noteRoute');
const notes = require('./db/db.json');
const {createNewNote, validateNote} = require('./lib/notes');
const noteId = require('./helpers/noteId');
const setId = require('./helpers/noteId');
const { v4: uuidv4 } = require('uuid');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('/api/notes', (req, res) => {
  let results = notes;
  res.json(results);
});

app.post('/api/notes', (req, res) => {
  req.body.id = notes.length.toString();
  // Destructuring assignment for the items in req.body
  const { title, text, id } = req.body;
  

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      id: uuidv4()
    };
    
    notes.push(newNote);

     // Write the db.json file again.
  fs.writeFile('./db/db.json', JSON.stringify(notes, null, 2), function (err) {

    if (err) {
        return console.log(err);
    }
// response is the users new note. 
    res.json(newNote);
});

    } else {
      res.json('Error in posting note');
    };
    
});

app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}`);
});