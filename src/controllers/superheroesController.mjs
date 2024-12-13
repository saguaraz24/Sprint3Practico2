import { obtenerSuperheroePorId, obtenerTodosLosSuperheroes, buscarSuperheroePorAtributo, obtenerSuperheroesMayoresDe30 } from "../services/superheroesService.mjs";
import { renderizarListaSuperheroes, renderizarSuperheroe } from "../views/responseView.mjs";
  
export async function obtenerSuperheroePorIdController(req, res) {
  console.log(req.params)
    const  id  = req.params.id;
    console.log(`Estoy en el controlador de obtener por id ${id}`)
    const superheroe = await obtenerSuperheroePorId(id);
    if(superheroe) {
      res.send(renderizarSuperheroe(superheroe));
    } 
    else{
      res.status(404).json({ mensaje: 'Superheroe no encontrado' });
    }
}
  
export async function obtenerTodosLosSuperheroesController(req, res) {
    const superheroes = await obtenerTodosLosSuperheroes();
    res.send(renderizarListaSuperheroes(superheroes));
}
  
export async function buscarSuperheroePorAtributoController(req, res) {
    const { atributo, valor } = req.params;

    const superheroes = await buscarSuperheroePorAtributo(atributo, valor);
    if(superheroes.length > 0) {
      res.send(renderizarListaSuperheroes(superheroes));
    } else {
      res.status(404).send({ mensaje: 'No se encontraron superheroes con ese atributo' });
    }
}
  
export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
    const superheroes = await obtenerSuperheroesMayoresDe30();
    res.send(renderizarListaSuperheroes(superheroes));
}

function validarNombreSuperheroe(nombreSuperheroe) {
  // Elimina espacios en blanco al inicio y al final
  const nombre = nombreSuperheroe.trim();

  // Verifica si está vacío
  if (!nombre) {
      return "El nombre del superhéroe es requerido.";
  }

  // Verifica la longitud mínima y máxima
  if (nombre.length < 3) {
      return "El nombre del superhéroe debe tener al menos 3 caracteres.";
  }
  if (nombre.length > 60) {
      return "El nombre del superhéroe no puede exceder los 60 caracteres.";
  }

  // Si pasa todas las validaciones
  return null; // Sin errores
}



