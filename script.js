
function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.showInfo = function() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`)
}

let book1 = new Book("Wind and Truth", "Brandon Sanderson", 700);
let book2 = new Book("Oathbringer", "Brandon Sanderson", 650);

book1.showInfo()

library = []

function addBook(book) {
    library.push(book)
}

addBook(book1)
addBook(book2)

console.log(library)

function searchByTitle(title) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].title === title) {
            return console.log("Book found:", library[i].title, "at index", i + ".");
        }
    }
    console.log("Book not found.")
}

searchByTitle("Wind and Truth")

function searchByAuthor(author) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].author === author) {
            console.log("Book found:", library[i].title, "at index", i + ".");
        }
    }
}

searchByAuthor("Brandon Sanderson")

function filterLibrary(library) {
    let filterLibrary = library.filter(book => book.pages < 100);
    console.log(filterLibrary)
}

filterLibrary(library)
