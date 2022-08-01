import books from './data.js';

const awesomeBooks = document.createElement('div');
awesomeBooks.className = 'awesome-books';

const BooknAuthor = (data) => {
  const container = document.createElement('div');
  container.className = 'container';

  const bookName = document.createElement('div');
  bookName.className = 'book-name';
  bookName.innerText = data.title;
  container.appendChild(bookName);

  const authName = document.createElement('div');
  authName.className = 'auth-name';
  authName.innerText = data.author;
  container.appendChild(authName);

  return container;
};

books.forEach((data) => {
  awesomeBooks.appendChild(BooknAuthor(data));
});

const section = document.body.querySelector('#awesome-books');
section.appendChild(awesomeBooks);
