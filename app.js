// Get elements from html
const form = document.querySelector('form');
const bookContent = document.querySelector('.books-content');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');


const books = [];
let booksContent = '';

// Add book function
function addBook(id, title, author) {
  const bookItem = {
    id,
    title,
    author,
}

  books.push(bookItem);
  bookTitle.value = '';
  bookAuthor.value = '';
  return books;
}

// Delete book function
books.filter((book) => book.id != e.target.id);
  bookContent.addEventListener('click', function(e) {
  console.log(books);
})

// Generate id
function generateId() {
  let id = Math.floor(Math.random() * 3000 + 1);
  return id;
}

// Display Book function
function displayBooks(){
    books.forEach((book) => {
      booksContent = `
      <div class="books-title">
        <p>${book.title} by ${book.author}</p>
      </div>
      <div class="books-btn">
        <button class="btn" id=${book.id}>Remove</button>
      </div>
      `
  })
}

// Submit book function
form.addEventListener('submit', function(e) {
  addBook(generateId(), bookTitle.value, bookAuthor.value);
  displayBooks();
  bookContent.innerHTML += booksContent;
  e.preventDefault();
});









