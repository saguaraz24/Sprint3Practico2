import { Router } from 'express';
import { renderSuperheroes, createSuperheroe, renderAddSuperheroForm, renderEditSuperheroForm, updateSuperheroe, deleteSuperheroe } from '../controllers/superheroeController.mjs';

const router = Router();
// router.get('/superheroes', renderSuperheroes);
// router.post('/nuevosuperheroe', createSuperheroe);
// router.get('/add-superhero', renderAddSuperheroForm); // Nueva ruta para mostrar el formulario


//*********** */
 router.get('/heroes', renderSuperheroes); //lista de SH con dashboard
 router.get('/add-superhero', renderAddSuperheroForm); 
 router.get('/edit-superhero/:id', renderEditSuperheroForm); // Nueva ruta para mostrar el formulario de edición 
 
 router.post('/superheroes', createSuperheroe); // Agrega un registro según body (navegador chome)
 router.post('/superheroes/:id', updateSuperheroe); // Nueva ruta para actualizar el superhéroe 
 router.put('/heroes/:id/editar', updateSuperheroe); // Nueva ruta para manejar la actualización de un superhéroe
 router.delete('/superheroes/:id', deleteSuperheroe); // Nueva ruta para manejar la eliminación
 export default router;
