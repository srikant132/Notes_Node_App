console.log('Starting notes.js');

var addNote = (title,body) =>{
console.log('Adding note',title,body);

};

var getAll = () =>{
console.log('Getting all note');

};

var getNote = (title) => {
console.log('Getting Note ',title);
};

var removeNote = (title) => {
console.log('Removeing Note ',title);
};

// Either we do it in this way
// if the argument and values are sane we can use this shortcuts

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote

};
