module.exports = (app, db) => {
    const { Cancha, TipoCancha, Horario, Reserva, Resena } = db;

    app.get('/admin/canchas', async (req, res) => {
        try {
            const canchas = await Cancha.findAll();
            res.render('admin/canchas', { canchas });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    app.post('/admin/canchas', async (req, res) => {
        try {
            const nuevaCancha = await Cancha.create(req.body);
            res.status(201).json(nuevaCancha);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
}