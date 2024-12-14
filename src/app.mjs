import express from 'express';
import mongoose from 'mongoose';
import superheroeRoutes from './routes/superheroeRoutes.mjs';
import { connectDB } from './config/dbConfig.mjs';

const app = express();

//mongoose.connect('mongodb://localhost/superheroes_db');
connectDB();

app.use(express.json());
app.use('/api', superheroeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});