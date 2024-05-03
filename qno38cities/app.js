function describe_city(nameOfCity, country) {
    if (country === void 0) { country = "pakistan"; }
    return "".concat(nameOfCity, " is in ").concat(country);
}
;
//three cities
var city1 = describe_city("karachi", "pakistan");
var city2 = describe_city("mumbai", "india");
var city3 = describe_city("new york", "America");
var city4 = describe_city("Dubai", "UAE");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
