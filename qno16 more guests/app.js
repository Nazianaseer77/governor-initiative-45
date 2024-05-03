var guest_list = ["irtesam", "yasha", "ayan", "eman", "feeha"];
var not_present = "eman";
var new_guest = "salman khan";
guest_list[3] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected sir/Madam" + guest_list[i] + ",\n we invited you on dinner tomorrow.\n Thank you\n");
}
guest_list.unshift("Rizwan", "isra", "shahzain");
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected sir/Madam" + guest_list[i] + ",\n we invited you on dinner tomorrow.\n Thank you\n");
}
