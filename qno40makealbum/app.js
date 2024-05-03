function make_Album(artistName, albumTitle) {
    return { artistName: artistName, albumTitle: albumTitle };
}
var album1 = make_Album("Ali", "Rahe mohabbat");
var album2 = make_Album("Madad", "Roshan Andhera");
var album3 = make_Album("Riyaz", "Mousam e Dil");
console.log(album1);
console.log(album2);
console.log(album3);
//number of tracks
function make_Album2(artistName, albumTitle, numberOfTracks) {
    return { artistName: artistName, albumTitle: albumTitle, numberOfTracks: numberOfTracks };
}
var album4 = make_Album2("Ali", "Dil hai", 30);
var album5 = make_Album2("Madad", "Ajeeb kahani", 40);
var album6 = make_Album2("kaifi", "kahani suno", 1);
console.log(album4);
console.log(album5);
console.log(album6);
