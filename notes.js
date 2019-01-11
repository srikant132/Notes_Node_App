console.log('Starting notes.js');       //here we try to export the content of this file

//console.log(module);                 //  we can check the module here
 module.exports.age = 25;             // it enble to export the values

 module.exports.addNote =() => {

   console.log('addNote');
   return 'New not';

 };
