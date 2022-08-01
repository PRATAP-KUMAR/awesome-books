import books from './data.js';

const awesomeBooks = document.createElement('div');
awesomeBooks.className = 'awesome-books';

const BooknAuthor = (data) => {
    // Create a Container 
  const container = document.createElement('div');
  container.className = 'container';

//   create inner div for book name
  const bookName = document.createElement('div');
  bookName.className = 'book-name';
  bookName.innerText = data.title;
  container.appendChild(bookName);

//   crea inner div for author name 
  const authName = document.createElement('div');
  authName.className = 'auth-name';
  authName.innerText = data.author;
  container.appendChild(authName);

    // create Button Remove
  const btnRemove = document.createElement('button');
  btnRemove.className = 'btn-remove';
  btnRemove.innerText = 'Remove';
  btnRemove.type = 'button';
  container.appendChild(btnRemove);

//   Create hr for row
    const hr = document.createElement('hr');
    container.appendChild(hr);

  return container;
};

const AddBookForm =()=>{
    // create Add Book Form 
    const bookForm = document.createElement('div');
    bookForm.id ='form';
    // bookForm.action='#';
    // bookForm.method='POST';

    // Create input for Book Name 
    const bookInput = document.createElement('input');
    bookInput.name = 'book-name';
    bookInput.className = 'book-name'
    bookInput.id = 'book-name';
    bookInput.type = 'text';
    bookInput.placeholder = 'Title';
    bookInput.style.marginTop = ' 10px';
    bookInput.required = 'true';
    bookForm.appendChild(bookInput);

    // Create br
    const br1 = document.createElement('br');
    bookForm.appendChild(br1);

    // Create Input For Author Name 
    const authorInput = document.createElement('input');
    authorInput.name = 'author-name';
    authorInput.id = 'author-name';
    authorInput.className = 'author-name';
    authorInput.type = 'text';
    authorInput.placeholder = 'Author';
    authorInput.style.marginTop = ' 10px';
    authorInput.required = 'true';
    bookForm.appendChild(authorInput);

    // Create br
    const br2 = document.createElement('br');
    bookForm.appendChild(br2);

    // Create Button for Book Add
    const btnAdd = document.createElement('button');
    btnAdd.type = 'submit';
    btnAdd.innerText = 'Add';
    btnAdd.id = 'btn-add';
    btnAdd.className = 'btn-add';
    btnAdd.style.marginTop = '10px';
    bookForm.appendChild(btnAdd);

    return bookForm
}

books.forEach((data) => {
  awesomeBooks.appendChild(BooknAuthor(data));
});

const section = document.body.querySelector('#awesome-books');
section.appendChild(awesomeBooks);
section.appendChild(AddBookForm());