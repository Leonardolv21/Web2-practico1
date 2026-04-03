const { table } = require('node:console');
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
            tipo_cancha_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                References: {
                    model: 'tipocancha',
                    key: 'id'
                }
            },
            precio_por_hora:{
                type: DataTypes.DECIMAL(11,3),
                allowNull: false
            },
            estado:{
                type: DataTypes.ENUM('Activa', 'Inactiva'),
                allowNull: false,
                defaultValue: 'Activa'
            },
        },
        {
            tableName: 'canchas',
            timestamps: true
         }
     );
     return Cancha;
}