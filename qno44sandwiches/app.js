function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("making a sandwich with: ".concat(items.join(","), "."));
}
make_sandwich("chicken", "cheese", "lettuce");
make_sandwich("tomato", "cheese", "egg", "mayo");
make_sandwich("ham", "cheese", "avocado", "cucumber");
