
console.log('Starting app.js');

const fs    = require('fs');                                                 // it create a constant with filesystemModule
const os    = require('os');                                                 // using two Built in module fs and os
const notes = require('./notes.js')                                         //here impoting own module in currnt directry


// var res  = notes.addNote();                                            //it shows the values from notes.js
// console.log(res);

//Add function calling here
console.log('Add:', notes.add(9,3));

//calling sub function
console.log('Sub:', notes.sub(9,3));

//calling mul function
console.log('Mul:', notes.mul(9,3));

//calling div function
console.log('Div:', notes.div(9,3));

// var user = os.userInfo();
//fs.appendFileSync('greeting.txt','Hello'+ user.username +'!');                                // it create a brandNew file  and append with Hello World!
                                                                                                // here we are greeting os user using the osInfo module
// fs.appendFileSync('greeting.txt',`Hello ${user.username}! You are ${notes.age}.`);              //here we using template string using ES -6 feature
