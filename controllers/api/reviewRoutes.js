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

  router.post('/', withAuth, async (req, res) => {
    try {
      const newReview = await Review.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newReview);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router; 