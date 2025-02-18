import express from 'express';
import mongoose from 'mongoose';
import methodOverride from 'method-override';
import superheroeRoutes from './routes/superheroeRoutes.mjs';
import { connectDB } from './config/dbConfig.mjs';

const app = express();
// Establecer EJS como motor de vistas 
app.set('view engine', 'ejs'); //
//  Middleware para servir archivos estáticos (opcional, si es necesario) 
app.use(express.static('public'));


//mongoose.connect('mongodb://localhost/superheroes_db');


app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Middleware para manejar formularios
app.use(methodOverride('_method')); // Middleware para manejar métodos HTTP
connectDB();
app.use('/api', superheroeRoutes);

// app.get('/superheroes', (req, res) => { res.render('index', { superheroes: [] }); // Puedes reemplazar '[]' con la lista de superhéroes real 
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});