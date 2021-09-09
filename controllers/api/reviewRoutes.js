const router = require('express').Router();
const withAuth = require('../../middleware/auth-middleware');
const { Book, Review, User, Author} = require('../../models');

router.get('/', (req, res) => {
    Review.findAll({})
      .then(reviewData => res.json(reviewData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.post('/', withAuth, (req, res) => {
    if (req.session) {
      Review.create({
        reviewText: req.body.text,
        book_id: req.body.book_id,
        user_id: req.session.user_id,
      })
        .then(reviewData => res.json(reviewData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    }
  });

module.exports = router; 