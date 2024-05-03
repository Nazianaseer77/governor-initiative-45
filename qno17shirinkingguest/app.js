var guest_list = ["irtesam", "ayan", "yasha", "eman", "feeha"];
var not_present = "eman";
var new_guest = "salman khan";
guest_list[3] = new_guest;
guest_list.unshift("farhan", "isra", "ishrat");
console.log("\nunfortunatily we can not arrange the big table , only two people allow.");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("sorry sir/Madam.".concat(remove_guest, " you are not invited for dinner."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("respected sir/Madam" + guest_list[i] + ",\nyes you are still invited tomorrow dinner \nthank you\n");
}
guest_list.splice(0, 2);
console.log(guest_list);
