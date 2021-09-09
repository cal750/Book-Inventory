const addReview = async (event) => {
    event.preventDefault();
  
    const reviewText = document.getElementById("review-text").value.trim();
  
    const book_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (reviewText) {
        const response = await fetch('/api/review', {
          method: 'POST',
          body: JSON.stringify({
            book_id,
            reviewText
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
  }
  
  document.querySelector('.review-form').addEventListener('submit', addReview);