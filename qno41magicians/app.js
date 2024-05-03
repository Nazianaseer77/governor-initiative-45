


//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
 //which prints the name of each magician in the array.








// define function to print each magician name from an arrey
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
//definean arrey containing magicians name
var magician_names = ["Harry potter", "Naseer Ahmed", "Gandalf"];
//call  the function to print each magician name
show_magicians(magician_names);
