console.log('Starting notes.js');       //here we try to export the content of this file

//console.log(module);                 //  we can check the module here
 module.exports.age = 25;             // it enble to export the values

 module.exports.addNote =() => {

   console.log('addNote');
   return 'New not';

 };


//Add function Defined and call in to app.js
module.exports.add = (a,b) =>{
return a+b;
}

//Substract function
module.exports.sub = (a,b) =>{
return a-b;
}

//multiplication function
module.exports.mul = (a,b) =>{
return a*b;
}

//Substract function
module.exports.div = (a,b) =>{
return a/b;
}
