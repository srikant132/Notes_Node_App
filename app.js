console.log('Starting app.js');

const fs    = require('fs');
const _     = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const argv = yargs.argv;
var command = process.argv[2];     //we passing through the command line Argument
console.log('command',command);
console.log('process',process.argv);
console.log('yargs',argv);


if(command === 'add'){
  notes.addNote(argv.title,argv.body);
}else if(command === 'list'){
  notes.getAll();                              //getAll function have no arguments it will show all notes
}else if(command === 'read'){
  notes.getNote(argv.title);
}else if(command === 'remove'){
  notes.removeNote(argv.title)
}else{
  console.log('Command not recognized');
}
