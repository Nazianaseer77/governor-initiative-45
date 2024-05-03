//define the function to show the magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//define an arrey of magicians names
var magician_names = ["Harry potter", "Naseer Ahmed", "Gandalf"];
//making a copy of original arrey through .slice () function
var copy_magician_names = magician_names.slice();
//modify the copied arrey to include "the great" with thier names
var copy_great_magicians = make_great(copy_magician_names);
// original
console.log("original arrey\n");
show_magicians(magician_names);
//copy
console.log("\ncopy arrey\n");
show_magicians(copy_great_magicians);
