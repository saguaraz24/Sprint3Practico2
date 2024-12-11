import superHeroRepository from "../repositories/SuperHeroRepository.mjs";

// const SuperheroeService = require('../services/SuperheroeService');

// class SuperheroeController {
//     async crearSuperheroe(req, res) {
//         try {
//             const { nombreSuperheroe } = req.body;

//             // Validación usando el servicio
//             const nombreValidado = SuperheroeService.validarNombreSuperheroe(nombreSuperheroe);

//             // Si pasa la validación, crear el superhéroe (a través del repositorio)
//             // ... lógica de creación

//             res.status(201).json({ mensaje: "Superhéroe creado con éxito", nombre: nombreValidado });
//         } catch (error) {
//             res.status(400).json({ error: error.message });
//         }
//     }
// }

//module.exports = new SuperheroeController();


//const superHeroRepository = new SuperHeroRepository();

export async function obtenerSuperheroePorId(id) {
  console.log(`Estoy en el servicio ${id}`)
  return await superHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes() {
  return await superHeroRepository.obtenerTodos();
}

export async function buscarSuperheroePorAtributo(atributo, valor) {
  return await superHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperheroesMayoresDe30() {
  return await superHeroRepository.obtenerMayoresDe30();
}

class SuperheroeService {
  validarNombreSuperheroe(nombreSuperheroe) {
      const nombre = nombreSuperheroe.trim();

      if (!nombre) throw new Error("El nombre del superhéroe es requerido.");
      if (nombre.length < 3) throw new Error("El nombre del superhéroe debe tener al menos 3 caracteres.");
      if (nombre.length > 60) throw new Error("El nombre del superhéroe no puede exceder los 60 caracteres.");

      return nombre; // Nombre validado
  }
}

//module.exports = new SuperheroeService();
