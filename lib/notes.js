const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return body;
};

function validateNote(note) {
    if(!note.title){
        return false;
    }
    if(!note.text){
        return false;
    }
    return true;
}

module.exports = {createNewNote, validateNote};