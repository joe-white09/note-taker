const Note = require('../lib/notes')

test('creates a note', () => {
    const note = new Note('new title', 'new note text');

    expect(note.title).toBe('new title');
    expect(note.text).toBe('new note text');
});