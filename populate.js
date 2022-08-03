/* eslint-disable max-classes-per-file */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Math.random();
  }
}

class Books {
  constructor() {
    this.data = [];
  }

  addBook(book) {
    this.data.push(book);
    localStorage.setItem('BOOKS', JSON.stringify(this.data));
    addToList(book);
  }

  removeBook(id) {
    const book = document.getElementById(id);
    book.remove();
    this.data = this.data.filter((bookObj) => bookObj.id !== id);
    localStorage.setItem('BOOKS', JSON.stringify(this.data));
    // location.reload();
    return false;
  }
}

const books = new Books();

function getInput() {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const book = new Book(title.value, author.value);
  title.value = '';
  author.value = '';
  return book;
}
const awesomeBooks = document.createElement('div');
awesomeBooks.innerHTML = '';
let i = 0;
function addToList(bookObj) {
  const container = document.createElement('div');
  container.className = 'container';
  i++;
  if (i % 2 === 0) {
    container.style.backgroundColor = '#D3D3D3';
  }
  container.setAttribute('id', bookObj.id);
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  container.appendChild(wrapper);

  const bookName = document.createElement('div');
  bookName.innerText = bookObj.title;
  wrapper.appendChild(bookName);

  const byText = document.createElement('div');
  byText.innerText = 'By';
  wrapper.appendChild(byText);

  const authName = document.createElement('div');
  authName.innerText = bookObj.author;
  wrapper.appendChild(authName);

  const buttonDelete = document.createElement('button');
  buttonDelete.innerText = 'Remove';
  container.appendChild(buttonDelete);

  buttonDelete.addEventListener('click', () => {
    books.removeBook(bookObj.id);
  });

  awesomeBooks.appendChild(container);
  const section = document.body.querySelector('#awesome-books');
  section.appendChild(awesomeBooks);
}

const addButton = document.getElementById('btn-add');
addButton.addEventListener('click', () => {
  const book = getInput();
  if ((book.author !== '') && (book.title !== '')) {
    books.addBook(book);
  }
});

window.onload = () => {
  books.data = JSON.parse(localStorage.getItem('BOOKS' || '[]'));
  if (books.data === null) {
    books.data = [];
    return;
  }
  books.data.forEach((book) => addToList(book));
};
