
console.log('Starting app.js');

const fs    = require('fs');                                                 // it create a constant with filesystemModule
const os    = require('os');                                                   // using two Built in module fs and os
const _     = require('lodash');                                           // Including third party module in node app
const notes = require('./notes.js')                                         //here impoting own module in currnt directry


console.log(_.isString(true));                                              //it show  false because boolean is not a string
console.log(_.isString('Srikant'));                                         //it shows true for Srikant for because it's a string //it isstring is an utility function of lodash


var filteredArray = _.uniq(['Srikant',1,'Srikant',2,'Rohan',3,'Rohit',4,'Mahesh',4,5,6,]);  // It gives the the unique array after removing the duplicate elements
console.log(filteredArray);





// var res  = notes.addNote();                                            //it shows the values from notes.js
//  console.log(res);




// var user = os.userInfo();
//fs.appendFileSync('greeting.txt','Hello'+ user.username +'!');                                // it create a brandNew file  and append with Hello World!
                                                                                                // here we are greeting os user using the osInfo module
// fs.appendFileSync('greeting.txt',`Hello ${user.username}! You are ${notes.age}.`);              //here we using template string using ES -6 feature
