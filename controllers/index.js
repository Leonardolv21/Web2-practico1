module.exports = (app, db) => {
    require('./home.controller')(app, db);
    require('./usuario.controller')(app, db);
    require('./cancha.controller')(app, db);
    require('./tipocancha.controller')(app, db);
    require('./horario.controller')(app, db);
    require('./reserva.controller')(app, db);
    require('./reseñas.controller')(app, db);
    require('./auth.controller')(app, db);
}