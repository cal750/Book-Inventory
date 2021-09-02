const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {};

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        text:{
            type: DataTypes.STRING(1024),
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: 'user',
                key: 'id',
            },
        },
        book_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: 'book',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamp: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'review'
    },
);

module.exports = Review; 