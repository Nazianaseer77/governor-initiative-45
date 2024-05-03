function make_shirt(size: string = "large", message: string = "I love typescript"){
    console.log(`making a ${size} t-shirty with the message"${message}" print on it`);
}

make_shirt(); //default large and message
make_shirt("medium")// default message, medium size
make_shirt("small","Dive into coding"); //custom message, small size