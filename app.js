const add = document.querySelector('#add');
const books = []

function addBook(title, author) {
  books.push({title, author});
  return books;
}

function deleteBook(){

}

console.log(addBook("Lord of the rings", "I wrote it"));
console.log(addBook("Harry Potter", "J.K Rowling"));

