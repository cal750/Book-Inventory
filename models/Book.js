const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

//Create new sequelize model for books
class Book extends Model {}

Book.init(
    {
    //defines the primary key
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    book_name: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    author_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'author',
            key: 'id',
        },
    },
    genre_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'genre',
            key: 'id'
        },
    },
    cover_url: {
        type: DataTypes.STRING,
        allowNull: false,
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
