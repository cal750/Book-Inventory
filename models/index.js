const User = require('./User');
const Book = require('./Book');
const Genre = require('./Genre');
const Author = require('./Author');
const Review = require('./Review');

Book.hasMany(Review,{
    foreignKey:'book_id'
});

Review.belongsTo(Book,{
    foreignKey: 'book_id',
});


Genre.hasMany(Book, {
    foreignKey: 'genre_id',
});

Book.belongsTo(Genre,{
    foreignKey: 'genre_id',
});


Author.hasMany(Book, {
    foreignKey: 'author_id',
});

Book.belongsTo(Author, {
    foreignKey: 'author_id'
});


User.hasMany(Review,{
    foreignKey: 'user_id',
});

Review.belongsTo(User,{
    foreignKey: 'user_id',
});


module.exports = { User, Book, Genre, Author, Review };

