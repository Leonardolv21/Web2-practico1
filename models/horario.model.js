const {DataTypes} = require('sequelize');
module.exports = (sequelize) => {
    const Horario = sequelize.define(
        'Horario',
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            cancha_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                References: {
                    model: 'canchas',
                    key: 'id'
                }
            },
            fecha: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            hora_inicio: {
                type: DataTypes.TIME,
                allowNull: false
            },
            hora_fin: {
                type: DataTypes.TIME,
                allowNull: false
            },
            disponible: {
                type: DataTypes.ENUM('Disponible', 'Reservado'),
                allowNull: false,
                defaultValue: 'Disponible'
             },
        },
        {
            tableName: 'horarios',
            timestamps: true
        }
    );
    return Horario;
}