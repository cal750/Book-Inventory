const router = require('express').Router();
const withAuth = require('../../middleware/auth-middleware');
const { Book, Review, User, Author} = require('../../models');

router.post('/book', withAuth, async  (req, res) => {
   try {

    // Find existing author or create a new one if they do not exist
    const [author, created] = await Author.findOrCreate({
        where: {author_name: req.body.author_name}
    });
    console.log('New Author: ', created);

    const bookData = await Book.create({
        ...req.body,
        book_name: req.body.book_name,
        author_id: author.id
    });

    const review = await Review.create({
        ...req.body,
        review: req.body.text,
        user_id: req.session.user_id,
    });
    res.status(200).json(review);
    } catch (err) {
    res.status(500).json(err);
    } 
});


module.exports = router; 