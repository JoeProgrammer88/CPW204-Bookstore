/**
 * Represents a individual book that can be purchased
 */
class Book {
    isbn : string;
    title : string;
    price : number;
    releaseDate : Date;
}

// Book object test code
let myBook = new Book();
myBook.isbn = "123";
myBook.price = 9.99;
myBook.title = "Programming for beginners";
myBook.releaseDate = new Date(2023, 9, 8); // Months start at index 0

console.log(myBook);