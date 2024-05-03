//Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding the phrase
 // the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.







//define the function to show the magicians names

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string []){
   return magicians.map(name =>`The Great ${name}`);
}

//define an arrey of magicians names

let magician_names =["Harry potter","Naseer Ahmed","Gandalf"];

let great_magicians = make_great(magician_names);

console.log(great_magicians);