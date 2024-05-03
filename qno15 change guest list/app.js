var guest_list = ["irtesam", "yasha", "ayan", "eman", "feeha"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected sir/Madam" + guest_list[i] + ",\n we are invited you on dinner tomorrow.\n thank you\n");
}
var not_present = "eman";
var new_guest = "salman khan";
guest_list[3] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected sir/Madam" + guest_list[i] + ",\n we are invited you on dinner tomorrow.\n thank you\n");
}
console.log("Miss.".concat(not_present, " she will not coming tomorrow dinner"));
