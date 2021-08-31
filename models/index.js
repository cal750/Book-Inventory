const User = require('./User');
const Book = require('./Book');
const Genre = require('./Genre');
const Author = require('./Author');
const Review = require('./Review');

Book.belongsTo(Author,{
    foreignKey:'book_id',
});

Book.hasMany(Review,{
    foreignKey:'review_id'
});

Book.hasOne(Genre,{
    foreignKey: 'genre_id',
});

Author.hasMany(Book, {
    foreignKey: 'book_id',
});

Review.hasOne(User,{
    foreignKey: 'user_id',
});

Review.belongsTo(Book,{
    foreignKey: 'book_id',
});

User.hasMany(Review,{
    foreignKey: 'review_id',
});

Genre.hasMany(Book, {
    foreignKey: 'book_id',
});

module.exports = { User, Book, Genre, Author, Review };

