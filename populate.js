let books = [];

if(!localStorage.getItem('ABC')) {
    localStorage.setItem('ABC', JSON.stringify(books));
} else {
    books = JSON.parse(localStorage.getItem('ABC'))
}

function saveLocally () {
    localStorage.setItem('ABC', JSON.stringify(books));
}

const removeBook = (bookToRemove) => {
    books = books.filter((book) => book !== bookToRemove);
    saveLocally();
    render();
}

const addBook = (bookToAdd) => {
    books.push(bookToAdd);
    saveLocally();
    render();
}

const awesomeBooks = document.createElement('div');

function render() {

    awesomeBooks.innerHTML = '';

    const BooknAuthor = (data) => {

        const container = document.createElement('div');

        const bookName = document.createElement('div');
        bookName.innerText = data.title;
        container.appendChild(bookName);

        const authName = document.createElement('div');
        authName.innerText = data.author;
        container.appendChild(authName);

        const button = document.createElement('button');
        button.innerText = 'Remove Book';
        container.appendChild(button);
        button.onclick = () => {
            removeBook(data);
        }

        return container;
    };

    

    books.forEach((data) => {
        awesomeBooks.appendChild(BooknAuthor(data));
    });

    const section = document.body.querySelector('#awesome-books');
    section.appendChild(awesomeBooks);
}

render();

const form = document.body.querySelector("form");
form.addEventListener('submit', (event)=>{
event.preventDefault();
const title = form.title.value;
const author = form.author.value;
const book = {title, author};
addBook(book);
form.reset();
})
