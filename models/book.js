const { Model, Datatypes } = require('sequalize');
const sequelize = require('../config/connection');

//Create new sequelize model for books
class Book extends Model {}

Book.init(
{
    //defines the primary key
    id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    book_name: {
        type: Datatypes.STRING(128),
        allowNull: false
    },
    author_id: {
        type: Datatypes.STRING(30),
        references: {
            model: 'author',
            key: 'id',
        },
    },
    genre_id: {
        type: Datatypes.INTEGER,
        references: {
            model: 'genre',
            key: 'id'
        },
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: 'book'
});

module.exports = Book;