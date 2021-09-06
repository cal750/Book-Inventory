const bookList = document.getElementById('bookList');
const bookName = document.getElementById('bookName');
const authorName = document.getElementById('authorName');
const searchBar = document.getElementById('searchBar');
let books = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredBooks = books.filter((book, author) => {
        return (
            bookName.toLowerCase().includes(searchString) ||
            authorName.toLowerCase().includes(searchString)
        );
    });
    displayBooks(filteredBooks);
});

