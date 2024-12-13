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