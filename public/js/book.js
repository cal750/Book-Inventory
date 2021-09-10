async function newBookHandler(event) {
    event.preventDefault();
  
    const book_name = document.querySelector('#book-title').value.trim();
    const author_name = document.querySelector('#author').value.trim();
    const cover_url = document.querySelector('#cover-url').value.trim();
    const text = document.querySelector('#review').value.trim();

    if (book_name && author_name && cover_url && text) {
      const response = await fetch(`api/books/book`, {
        method: 'POST',
        body: JSON.stringify({
          book_name,
          cover_url,
          author_name,
          text,
        }),
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
    if (response.ok) {
      document.location.replace('/inventory');
    } else {
      alert(response.statusText);
    }
  }
};
  
  document.querySelector('.new-book').addEventListener('submit', newBookHandler);