import { createSuperheroe, getAllSuperheroes, getSuperheroeById, updateSuperheroeById, } from '../repositories/superheroeRepository.mjs';
import {deleteSuperheroeByIdService} from '../services/superheroesService.mjs'
// const createSuperheroeHandler = async (req, res) => {
//   try {
//     const newSuperheroe = await createSuperheroe(req.body);
//     res.status(201).json(newSuperheroe);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// //export { createSuperheroeHandler as createSuperheroe };


// const renderSuperheroes = async (req, res) => { 
//   try { 
//     const superheroes = await getAllSuperheroes(); 
//     res.render('dashboard', { superheroes }); 
//   } catch (error) { res.status(500).send(error.message); 

//   } 
// }; 
// //export { renderSuperheroes };

// const renderAddSuperheroForm = (req, res) => { res.render('addSuperhero'); // Renderiza la vista addSuperhero.ejs 
// };

// export { createSuperheroeHandler as createSuperheroe, renderSuperheroes, renderAddSuperheroForm };


const createSuperheroeHandler = async (req, res) => {
  try {
    const newSuperheroe = await createSuperheroe({
      nombreSuperheroe: req.body.nombreSuperheroe,
      nombreReal: req.body.nombreReal,
      edad: req.body.edad,
      planetaOrigen: req.body.planetaOrigen,
      debilidad: req.body.debilidad,
      poderes: req.body.poderes.split(',').map(p => p.trim()), // Convierte la cadena en un array
      aliados: req.body.aliados.split(',').map(a => a.trim()), // Convierte la cadena en un array
      enemigos: req.body.enemigos.split(',').map(e => e.trim()) // Convierte la cadena en un array
    });
    res.status(201).json(newSuperheroe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const renderSuperheroes = async (req, res) => {
  try {
    const superheroes = await getAllSuperheroes();
    res.render('dashboard', { superheroes });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const renderAddSuperheroForm = (req, res) => {
  res.render('addSuperhero');
};

const renderEditSuperheroForm = async (req, res) => {
  try {
    const superheroe = await getSuperheroeById(req.params.id);
    res.render('editSuperhero', { superheroe });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateSuperheroe = async (req, res) => {
  try {
    const updatedSuperheroe = await updateSuperheroeById(req.params.id, {
      nombreSuperheroe: req.body.nombreSuperheroe,
      nombreReal: req.body.nombreReal,
      edad: req.body.edad,
      planetaOrigen: req.body.planetaOrigen,
      debilidad: req.body.debilidad,
      poderes: req.body.poderes.split(',').map(p => p.trim()), // Convierte la cadena en un array
      aliados: req.body.aliados.split(',').map(a => a.trim()), // Convierte la cadena en un array
      enemigos: req.body.enemigos.split(',').map(e => e.trim()) // Convierte la cadena en un array
    });
    res.status(200).json(updatedSuperheroe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// const deleteSuperheroe = async (req, res) => { 
//   try { 
//     await deleteSuperheroeById(req.params.id); 
//     res.status(204).end(); // Envía una respuesta sin contenido 
// } catch (error) {
//    res.status(400).json({ message: error.message }); 
//   } 
// };
const deleteSuperheroe = async (req, res) => {
  
  try { 
      await deleteSuperheroeByIdService(req.params.id);
      res.status(204).end(); // Envía una respuesta sin contenido 
      console.log(`El registro fue eliminado: ${req.params.id}`);
    } catch (error) {
      res.status(400).json({ message: error.message }); 
    } 
  
}

export { createSuperheroeHandler as createSuperheroe, renderSuperheroes, renderAddSuperheroForm, renderEditSuperheroForm, updateSuperheroe, deleteSuperheroe };
