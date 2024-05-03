//They think of something you could store in a TypeScript Object.
 //Write a program that creates Objects containing these items.





interface item {
name:string
price:number
}
//create two object
const books : item = {
    name:`harry potter`,
     price: 450
}
const mangoes :item={
    name: `mangoes`,
    price: 500
}
console.log(`book name: ${books.name},price $${books.price}`);
console.log(`mango name: ${mangoes.name},price $${mangoes.price}`);