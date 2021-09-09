const router = require('express').Router();
const { Book, Author, Genre, Review, User } = require('../models');
const withAuth = require('../middleware/auth-middleware');

router.get('/', async (req, res) => {
  res.render('home');
});

router.get('/book/:id', async (req, res) => {
  try {
    const bookData = await Book.findByPk(req.params.id, {
      include: [
        {
          model: Author,
          attributes: ['author_name'],
        },
        {
          model: Review,
          attributes: ['text'],
          include: {
            model: User,
            attributes: ['name'],
          }
        },
      ],
    });

    const book = bookData.get({ plain: true });

    res.render('book', {
      ...book,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


// register
router.get('/register', function(req, res){

  res.render('register');

});

router.get('/inventory', async (req, res) => {
  // Get all books
  try {
    const bookData = await Book.findAll({
      include: [
        {
          model: Author,
          attributes: ['author_name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const books = bookData.map((book) => book.get({ plain: true }));
    const bookString = JSON.stringify(books);
    // Pass serialized data and session flag into template
    res.render('inventory', { 
      books, bookString, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;
