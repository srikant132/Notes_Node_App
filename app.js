
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
  console.log('Adding new note');
}else if(command === 'list'){
  console.log('Listing all notes');
}else if(command === 'read'){
  console.log('Reading notes');
}else if(command === 'remove'){
  console.log('Removing notes');
}else{
  console.log('Command not recognized');
}
