const {DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    const tipocancha = sequelize.define(
        'tipocancha',
        {   
            id: {
                tpye: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true 
            },
            nombre:{
                type: DataTypes.STRING,
                allwNull: false
             }
        },   
        {
            tableName: 'tipocancha',
            timestamps: true
         }
     );
     return tipocancha;
}