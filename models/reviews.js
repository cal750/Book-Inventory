const {Model, DataTypes} = require('sequelize');
const sequilize = require('../config/connection');

class Reviews extends Model {};

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncremental: true,
        },
        text:{
            type: DataTypes.STRING(1024),
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'user',
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

module.exports = Reviews; 