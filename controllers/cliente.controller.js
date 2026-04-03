module.exports = (app, db) => {
    const { Cancha, Horario, Reserva, Resena } = db;

    app.get('/cliente/canchas', async (req, res) => {
        try {
            const canchas = await Cancha.findAll();
            res.render('cliente/canchas', { canchas });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    app.get('/cliente/horarios', async (req, res) => {
        try {
            const { fecha } = req.query;
            const horarios = await Horario.findAll({ where: { fecha } });
            res.render('cliente/horarios', { horarios });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    
    app.post('/cliente/reservas', async (req, res) => {
        try {
            const { horario_id } = req.body;
            const reserva = await Reserva.create({ usuario_id: req.usuario.id, horario_id });
            res.status(201).json(reserva);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
}