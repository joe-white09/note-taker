const router = require('express').Router();
const fs = require('fs');
const notes = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');

// returns notes db file
router.get('/', (req, res) => {
    res.json(notes);
  });
  
// creates a new note
router.post('/', (req, res) => {
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

// deletes a note
router.delete("/:id", function (req, res) {
  
    for (let i = 0; i < notes.length; i++) {
  
        if (notes[i].id == req.params.id) {
            // Splice takes i position, and then deletes the 1 note.
            notes.splice(i, 1);
            break;
        }
    }
    // Write the db.json file again.
    fs.writeFile('./db/db.json', JSON.stringify(notes, null, 2), function (err) {
  
        if (err) {
            return console.log(err);
        } else {
            console.log("Your note was deleted!");
        }
    });
    res.json(notes);
  });

module.exports = router;
