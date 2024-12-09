import superHeroRepository from "../repositories/SuperHeroRepository.mjs";

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

module.exports = new SuperheroeService();
