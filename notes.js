// require the the fileSystem module
const fs = require('fs')

// require the chalk lib to style the console output
const chalk = require("chalk");

// create function add note
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Title is taken!'))
    }
}

// create function remove note
const removeNote = (title) => {
    const notes = loadNotes()
    const noteToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > noteToKeep.length) {
        saveNotes(noteToKeep);
        console.log(chalk.green.inverse('Note removed!'));
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

// create function list note
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.yellow.inverse('--------Your notes--------'))
    notes.forEach((note) => console.log(note.title))
}

// create function read a note
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.yellow.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

// create function save note to data store
const saveNotes = (notes) => {
    const jsonData = JSON.stringify(notes)
    try{
        fs.writeFileSync('notes.json', jsonData)
    }catch (e){
        console.log(chalk.red.inverse('Cannot create file or directory...'))
    }
}

// create function load notes from data store
const loadNotes = () => {
    try {
        const bufferedData = fs.readFileSync('notes.json')
        const jsonData = bufferedData.toString()
        return JSON.parse(jsonData)
    } catch (e) {
        return []
    }
}

// create function clear all notes
const clearNotes = () => {
    saveNotes([])
    console.log(chalk.green.inverse('Notes cleared successfully'))
}

// export all function for external use
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
    clearNotes: clearNotes
}