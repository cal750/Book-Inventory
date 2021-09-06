const newFormHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#content').value.trim();
    const user_id = document.querySelector('#user_id').value.trim();
    const book_title = document.querySelector('#book_id').value.trim();;

    if ( content ) {
        const response = await fetch(`/api/book`, {
            method: 'POST',
            body: JSON.stringify({user_id, book_id, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/book/:id')
        } else {
            alert('Failed to post review');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/book/review/${id}`, {
            method: 'DELETE',
          });
      
          if (response.ok) {
            document.location.replace('/book/:id');
          } else {
            alert('Failed to delete review');
        }
    }
};

document
  .querySelector('.review-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.review-list')
  .addEventListener('click', delButtonHandler);
