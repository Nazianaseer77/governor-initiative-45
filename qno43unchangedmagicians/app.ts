
//Unchanged Magicians: Start with your work from Exercise 40.
// Call the function make_great() with a copy of the array of magicians’ names.
 // Because the original array will be unchanged, return the new array and store it in a separate array. 
 // Call show_magicians() with each array to show that you have one array of the original names
  // and one array with the Great added to each magician’s name.







//define the function to show the magicians names

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string []){
   return magicians.map(name =>`The Great ${name}`);
}

//define an arrey of magicians names

let magician_names =["Harry potter","Naseer Ahmed","Gandalf"];

//making a copy of original arrey through .slice () function

let copy_magician_names = magician_names .slice();

//modify the copied arrey to include "the great" with thier names

let copy_great_magicians = make_great(copy_magician_names);

// original
console.log("original arrey\n");
show_magicians(magician_names);

//copy
console.log("\ncopy arrey\n")
show_magicians(copy_great_magicians);