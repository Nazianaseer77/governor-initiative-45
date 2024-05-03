//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides,
 // and it should print a summary of the sandwich that is being ordered. Call the function three times,
  // using a different number of arguments each time.







function make_sandwich(...items:string[]){
    console.log(`making a sandwich with: ${items.join(`,`)}.`);
}

make_sandwich("chicken","cheese","lettuce");
make_sandwich("tomato","cheese","egg","mayo");
make_sandwich("ham","cheese","avocado","cucumber");

