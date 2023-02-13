// Get elements from html
const form = document.querySelector('form');
const bookContent = document.querySelector('.books-content');
const books = [];
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');

let booksContent = '';

// Add book function
function addBook(title, author) {
  books.push({title, author});
  bookTitle.value = ''
  bookAuthor.value = ''
  return books;
}

// Delete book function
function deleteBook(){

}

// Display Book function
function displayBooks(){
    books.forEach((book, index) => {
      booksContent = `
      <div class="books-title">
        <p>${book.title} by ${book.author}</p>
      </div>
      <div class="books-btn">
        <button class="btn">Remove</button>
      </div>
      `
    })
}

// Submit book function
form.addEventListener('submit', function(e) {
  addBook(bookTitle.value, bookAuthor.value);
  displayBooks();
  bookContent.innerHTML += booksContent;
  e.preventDefault();
});




