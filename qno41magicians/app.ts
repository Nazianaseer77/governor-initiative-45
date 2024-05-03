// define function to print each magician name from an arrey

function show_magicians(magician:string[]){
    magician.forEach(name => console.log(name));
}

//definean arrey containing magicians name

let magician_names = ["Harry potter","Naseer Ahmed","Gandalf"]

//call  the function to print each magician name

show_magicians(magician_names);