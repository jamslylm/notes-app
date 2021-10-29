// require yargs for cli configurations
const yargs = require('yargs')

//require our notes modules
const notes = require('./notes')

// Cusstomize yargs version
yargs.version('1.0.0')
yargs.usage('Usage: <command> <option1> [value1] <option2> [value2]...')

// create add command
yargs.command({
    command: 'add',
    aliases: ['a'],
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
            alias: 't',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
            alias: 'b'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    aliases: ['r'],
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    aliases: ['l'],
    handler() {
        notes.listNotes()
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    aliases: ['R'],
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// create clear all notes command
yargs.command({
    command: 'clear',
    describe: 'Remove all your notes',
    aliases: 'c',
    handler(){
        notes.clearNotes()
    }
})

yargs.parse()