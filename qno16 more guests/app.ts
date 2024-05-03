//More Guests: You just found a bigger dinner table, so now more space is available.
 //Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15.
// Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
 //• Print a new set of invitation messages, one for each person in your list.


let guest_list: string []= [`irtesam`,`yasha`,`ayan`,`eman`,`feeha`];
let not_present: string =`eman`;
let new_guest: string =`salman khan`;
guest_list[3]=new_guest;
for(let i=0; i<guest_list.length;i++){
        console.log(`Respected sir/Madam` + guest_list[i] +`,\n we invited you on dinner tomorrow.\n Thank you\n`)
}
guest_list.unshift(`Rizwan`,`isra`,`shahzain`);
for(let i=0; i<guest_list.length;i++){
    console.log(`Respected sir/Madam` + guest_list[i] +`,\n we invited you on dinner tomorrow.\n Thank you\n`)
}