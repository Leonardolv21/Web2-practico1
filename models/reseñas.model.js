const {DataTypes} = require('sequelize');
module.exports = (sequelize) => {
    const Reseña = sequelize.define(
        'reseñas',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            usuario_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'usuarios',
                    key: 'id'
                }
            },
            cancha_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'canchas',
                    key: 'id'
                }
            },
            calificacion: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    min: 1,
                    max: 5
                }
            },
            comentario: {
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        {
            tableName: 'reseñas',
            timestamps: true
        }
    );
    return Reseña;
}