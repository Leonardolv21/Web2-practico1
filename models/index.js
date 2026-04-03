const {sequelize, Sequelize} = require('../config/db.config');
const usuario = require('./usuario.model')(sequelize);
const cancha = require('./cancha.model')(sequelize);
const tipocancha = require('./tipocancha.model')(sequelize);
const horario = require('./horario.model')(sequelize);
const reserva = require('./reserva.model')(sequelize);
const reseñas = require('./reseñas.model')(sequelize);
module.exports={
    usuario,
    cancha,
    tipocancha, 
    horario,
    reserva,
    reseñas,
    Sequelize: sequelize.Sequelize
}