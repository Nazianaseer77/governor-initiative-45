function city_country(city, country) {
    //return`"${city}, ${country}"`
    console.log("\"".concat(city, ", ").concat(country, "\""));
}
city_country("karachi", "pakistan");
var mycities = city_country("karachi", "pakistan");
console.log(mycities);
console.log(city_country("Dubai", "UAE"));
console.log(city_country("london", "united kingdom"));
console.log(city_country("riyadh", "saudi arabia"));
