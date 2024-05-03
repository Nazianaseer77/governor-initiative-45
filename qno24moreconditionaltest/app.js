var car = "subaru";
var age = 25;
var number = [1, 2, 3, 4];
//**string tests **
// test1 equality (true)
console.log("is car == `subaru`? I pridict true");
console.log(car == "subaru"); //true (case insensitive)
//test2: strict Equality (false)
console.log("is car ===`subaru`? I pridict false");
console.log(car === "subaru"); //false (case sensitive)
//test3: inequality (true)
console.log("is car !=`subaru`? I pridict true");
console.log(car !== "subaru"); //true
//test4: inequality (false)
console.log("is car !==`subaru`? I pridict false");
console.log(car !== "subaru"); //false (sensitive case)
//**tolowercase function test **/
//test5: lowercase conversion (true)
console.log("is car. tolowercase() ==`subaru`? I pridict true.");
console.log(car.toLowerCase() == "subaru"); //true (converted tolower case)
//test6: lowercase conversion (false)
console.log("is car. tolowercase ()===`subaru`? I pridict false.");
console.log(car.toLowerCase() === "subaru"); //false ( originol value remain uppercase)
//**  Neumerical tests**
//test 7: Equality (true)
console.log("is age == 25? I pridict true");
console.log(age == 25); //true
//test8: Inequality (false)
console.log("is age !=30? I pridict false");
console.log(age != 30);
//test9: greter than (false)
console.log("is age > 30? I pridict false");
console.log(age > 30);
//test10: less than or equal    (true)
console.log("is age<=25? I pridict true");
console.log(age <= 25); //true
//**logical operators */
//test11: AND (true)
console.log("is age > 20 && age <30 ? I pridict true");
console.log(age > 20 && age < 30); // true (both conditions met)
//test 12 OR (false)
console.log("is age >30 || age < 18? I pridict false");
console.log(age > 30 || age < 19); //false (neither condition met)
//** */ Array tests**
//test13: in array( true)
console.log("is 3 in number? I pridict true");
console.log(3 in number); // true(checks forindex existence)
//test14: Not in array (false)
console.log("is 5 not in number? I pridict true");
console.log(is, 5, not in number); // true ( negation of "in operator")
