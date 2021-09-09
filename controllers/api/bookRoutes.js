const router = require('express').Router();
const withAuth = require('../../middleware/auth-middleware');
const { Book, Review, User, Author} = require('../../models');

router.get('/review/:id', withAuth, async (req, res) => {
    try {
        const reviewData = await Review.findByPk(req.params.book_id, {
            include: [
                {
                    model: Book,
                    attribute: ['name'],
                },
            ],
        });

        const review = reviewData.map((review) => review.get({ plain: true }));

        res.render('review', {
            review,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/book', withAuth, async  (req, res) => {
   try {
    // Find existing author or create a new one if they do not exist
    const [author, created] = await Author.findOrCreate({
        where: {author_name: req.body.author_name}
    });
    console.log('New Author: ', created);

    const bookData = await Book.create({
        book_name: req.body.book_name,
        author_id: author.id
    })

    const review = await Review.create({
        content: req.body.text,
        user_id: req.session.user_id,
        book_id: bookData.id 
    })
    res.status(200).json(review);
    } catch (err) {
    res.status(500).json(err);
    } 
});

module.exports = router; 