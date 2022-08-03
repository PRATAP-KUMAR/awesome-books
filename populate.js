// class book {
//   constructor(title, author, id) {
//     this.title = title;
//     this.author = author;
//     this.id = Math.random();
//   }
// }

let books = class books {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.data.push(book);
    localStorage.setItem('BOOKS', JSON.stringify(this.book));
    // BooknAuthor(this.data);
  }

  removeBook(id) {
    const book = document.getElementById(id);
    book.remove();
    this.data = this.data.filter((bookObj) => bookObj.id !== id);
    localStorage.setItem('BOOKS', JSON.stringify(this.data));
    // location.reload();
    return false;
  }
};
if (!localStorage.getItem('BOOKS')) {
  localStorage.setItem('BOOKS', JSON.stringify(books));
} else {
  books = JSON.parse(localStorage.getItem('BOOKS'));
}

function saveLocally() {
  localStorage.setItem('BOOKS', JSON.stringify(books));
}

const awesomeBooks = document.createElement('div');
awesomeBooks.className = 'awesomeBooks';

function render() {
  awesomeBooks.innerHTML = '';
  let i = 0;
  const BooknAuthor = (data) => {
    const container = document.createElement('div');
    container.className = 'container';
    i += 1;
    if (i % 2 === 0) {
      container.style.backgroundColor = '#D3D3D3';
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    container.appendChild(wrapper);

    const bookName = document.createElement('div');
    bookName.innerText = `"${data.title}"`;
    wrapper.appendChild(bookName);

    const byText = document.createElement('div');
    byText.innerText = 'by';
    wrapper.appendChild(byText);

    const authName = document.createElement('div');
    authName.innerText = data.author;
    wrapper.appendChild(authName);

    const button = document.createElement('button');
    button.innerText = 'Remove';
    container.appendChild(button);
    button.onclick = () => {
      books = books.filter((book) => book !== data);
      saveLocally();
      render();
    };

    return container;
  };

  books.forEach((data) => {
    awesomeBooks.appendChild(BooknAuthor(data));
  });

  const section = document.body.querySelector('#awesome-books');
  section.appendChild(awesomeBooks);
}

render();

const form = document.body.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = form.title.value;
  const author = form.author.value;
  const book = { title, author };
  books.push(book);
  saveLocally();
  render();
  form.reset();
});
