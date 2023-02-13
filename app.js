/* eslint-disable max-classes-per-file */
/* eslint-disable no-use-before-define */
const listOfbooks = document.querySelector('.awesome-book-list');
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.bookid = Math.random().toFixed(1);
  }
}

class StoreBook {
  constructor() {
    // Array of objects for the book items
    this.BookData = [];
  }
  // Add new Book to the book list

  addBook(newbook) {
    this.BookData.push(newbook);
    localStorage.setItem('BookDB', JSON.stringify(this.BookData));
    DisplayBooks(newbook);
  }

  // Remove book from the list
  removeBook(bookid) {
    const rmvbook = document.getElementById(bookid);
    rmvbook.remove();
    removeSuccess();
    this.BookData = this.BookData.filter((x) => x.bookid !== bookid);
    localStorage.setItem('BookDB', JSON.stringify(this.BookData));
  }
}

const savebook = new StoreBook();
// Get input value
function getformInput() {
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const insertbook = new Book(title.value, author.value);
  return insertbook;
}

// Display teh list of books on the web page
function DisplayBooks(index) {
  let bgcolor = '';
  if (savebook.BookData.indexOf(index) % 2 !== 0) {
    bgcolor = 'white';
  } else {
    bgcolor = 'light';
  }
  const displaybook = document.createElement('div');
  displaybook.classList.add('book-item');
  displaybook.classList.add(bgcolor);
  displaybook.setAttribute('id', index.bookid);
  displaybook.innerHTML = `<p>${index.title} by ${index.author}</p>`;
  const removeBook = document.createElement('button');
  removeBook.innerHTML = 'Remove';
  removeBook.addEventListener('click', () => savebook.removeBook(index.bookid));
  displaybook.appendChild(removeBook);
  listOfbooks.appendChild(displaybook);
}

const title = document.querySelector('#title');
const author = document.querySelector('#author');
// Add Button
const addnewBook = document.querySelector('#add');
addnewBook.addEventListener('click', () => {
  if (title.value === '' || author.value === '') {
    showAlert();
  } else {
    const item = getformInput();
    savebook.addBook(item);
    success();
  }
});

// display
window.onload = () => {
  savebook.BookData = JSON.parse(localStorage.getItem('BookDB' || '[]'));
  if (savebook.BookData === null) {
    savebook.BookData = [];
    return;
  }
  savebook.BookData.forEach((item) => DisplayBooks(item));
};

function showAlert() {
  const div = document.createElement('div');
  div.className = 'error';
  div.appendChild(document.createTextNode('fields are required'));
  const newB = document.querySelector('.new-books');
  newB.appendChild(div);
  setTimeout(() => document.querySelector('.error').remove(), 3000);
}

function success() {
  const div = document.createElement('div');
  div.className = 'success';
  div.appendChild(document.createTextNode('Book successfully added!'));
  const newB = document.querySelector('.new-books');
  newB.appendChild(div);
  setTimeout(() => document.querySelector('.success').remove(), 3000);
}

function removeSuccess() {
  const div = document.createElement('div');
  div.className = 'remove-book';
  div.appendChild(document.createTextNode('Book Removed Successfully!'));
}
