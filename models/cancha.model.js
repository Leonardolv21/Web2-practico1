const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    const Cancha = sequelize.define(
        'Cancha',
        {
            id:{
                type: DataType.INTERGER,
                primarkey: true,
                autoIncrement: true
            },
            nombre:{
                type: DataTypes.STRING,
                allowNull: false
            },
            
        },
}