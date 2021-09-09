const router = require('express').Router();
const withAuth = require('../../middleware/auth-middleware');
const { Book, Review, User, Author} = require('../../models');

// router.post('/book', withAuth, async  (req, res) => {
//    try {

//     // Find existing author or create a new one if they do not exist
//     const [author, created] = await Author.findOrCreate({
//         where: {author_name: req.body.author_name}
//     });
//     console.log('New Author: ', created);

//     const bookData = await Book.create({
//         ...req.body,
//         user_id: req.session.user_id,        
//     });

//     const review = await Review.create({
//         ...req.body,
//         user_id: req.session.user_id,
//     });
//     res.status(200).json(review, bookData, author);
//     } catch (err) {
//     res.status(500).json(err);
//     } 
// });

router.post('/book', withAuth, async  (req, res) => {
    try {
     // Find existing author or create a new one if they do not exist
     const [author, created] = await Author.findOrCreate({
         where: {author_name: req.body.author_name}
        });
        console.log('New Author: ', created);

     res.status(200).json(author);
     } catch (err) {
     res.status(500).json(err);
     } 

     try {
     const bookData = await Book.create({
         ...req.body,
         user_id: req.session.user_id,
         author_id: author.id,
     });
     res.status(200).json(bookData);
     } catch (err) {
     res.status(500).json(err);
     } 

     try {      
     const review = await Review.create({
         ...req.body,
         user_id: req.session.user_id,
         book_id: bookData.id,
         text: req.body.text,
     });
     res.status(200).json(review);
     } catch (err) {
     res.status(500).json(err);
     } 
 });

module.exports = router; 