/* eslint-disable max-classes-per-file */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */
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
    location.reload();
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
function addToList(bookObj) {
  const container = document.createElement('div');
  container.className = 'container';
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

  document.getElementById('list').addEventListener('click',()=>{
  document.getElementById('list').style.color='blue';
  document.getElementById('add').style.color='black';
  document.getElementById('contact').style.color='black';
  document.getElementById('awesome-books').style.display= 'unset';
  document.getElementById('row').style.display= 'none';
  document.getElementById('form-title').style.display= 'none';
  document.getElementById('form').style.display= 'none';
  document.getElementById('section-contact').style.display='none';

});

document.getElementById('add').addEventListener('click',()=>{
  document.getElementById('list').style.color='black';
  document.getElementById('add').style.color='blue';
  document.getElementById('contact').style.color='black';
  document.getElementById('awesome-books').style.display= 'none';
  document.getElementById('row').style.display= 'none';
  document.getElementById('form-title').style.display= 'flex';
  document.getElementById('form').style.display= 'flex';
  document.getElementById('section-contact').style.display='none';


});

document.getElementById('contact').addEventListener('click',()=>{
  document.getElementById('list').style.color='black';
  document.getElementById('add').style.color='black';
  document.getElementById('contact').style.color='blue';
  document.getElementById('section-contact').style.display='flex';
  document.getElementById('awesome-books').style.display= 'none';
  document.getElementById('row').style.display= 'none';
  document.getElementById('form-title').style.display= 'none';
  document.getElementById('form').style.display= 'none';
});
