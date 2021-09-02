const sequelize = require('../config/connection');
const { Book, Author, Genre, Review, User } = require('../models');

const userData = require('./userData.json');
const genreData = require('./genreData.json');
const authorData = require('./authorData.json');
const bookData = require('./bookData.json');
const reviewData = require('./reviewData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const genres = await Genre.bulkCreate(genreData, { });
  const authors = await Author.bulkCreate(authorData, { });
  const books = await Book.bulkCreate(bookData, { });
  const reviews = await Review.bulkCreate(reviewData, { });

  process.exit(0);
};

seedDatabase();
