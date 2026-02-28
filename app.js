const express = require('express');
const path = require('path');
const db = require('./db'); // Importamos tu conexión a MySQL
const session = require('express-session');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 3000;

// --- CONFIGURACIÓN (Middlewares) ---
// Esto permite que el servidor entienda los datos que enviamos desde el formulario HTML
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Configuramos las sesiones (para saber quién está logueado)
app.use(session({
    secret: 'secreto_super_seguro_cncm', // Cambia esto después
    resave: false,
    saveUninitialized: false
}));

// Hacemos que la carpeta "public" sea accesible (donde está tu index.html)
app.use(express.static(path.join(__dirname, 'public')));

// --- RUTAS ---

// 1. Ruta principal: Carga el Login
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 2. Ruta de Login: Aquí es donde ocurre la magia al dar clic en "Entrar"
app.post('/login', (req, res) => {
    const { correo, password } = req.body;

    // Buscamos al usuario en la tabla que creamos en SQL
    const query = 'SELECT * FROM usuarios WHERE correo = ?';
    
    db.query(query, [correo], async (err, results) => {
        if (err) {
            return res.status(500).send('Error en el servidor');
        }

        if (results.length > 0) {
            const usuario = results[0];

            // Comparamos la contraseña (encriptada con bcrypt)
            const match = await bcrypt.compare(password, usuario.password);
            
            // ... dentro de app.post('/login') ...
            if (match) {
                req.session.userId = usuario.id;
                req.session.nombre = usuario.nombre;
                req.session.rol = usuario.rol;
                req.session.plantel = usuario.plantel;

                //Redireccionamos al Dashboard
                res.redirect('/dashboard');
            } else {
                res.send('<script>alert("Contraseña incorrecta"); window.location="/";</script>');
            }
        } else {
            res.send('El usuario no existe');
        }
    });
});

// Arrancamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor CNCM corriendo en http://localhost:${PORT}`);
});

app.get('/dashboard', (req, res) => {
    // Si no hay sesión, lo mandamos de regreso al login (Seguridad básica)
    if (!req.session.userId) {
        return res.redirect('/');
    }
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});
