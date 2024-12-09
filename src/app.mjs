import express from 'express';
import { connectDB } from './config/dbConfig.mjs';
import superheroesRoutes from './routes/superHeroRoutes.mjs';
//import blogRouter from './routes/blog.mjs'


const app = express();
const PORT = 3000;

app.use(express.json());

connectDB();

//*** */
//app.use(`/blogs`, blogRouter);
app.use('/api', superheroesRoutes);
//**** */

app.use((req, res) => {
  res.status(404).send({ error: 'Ruta no encontrada'});
});

app.listen(PORT, () => {
  console.log(`Escuchando en puerto ${PORT}`);
  console.log(`Corriendo en http://localhost:${PORT}`);
  
});