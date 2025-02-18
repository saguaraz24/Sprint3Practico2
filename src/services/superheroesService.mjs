//import superh from "../repositories/superheroeRepository.mjs";
import { createSuperheroe, getAllSuperheroes, getSuperheroeById, updateSuperheroeById, deleteSuperheroeById } from '../repositories/superheroeRepository.mjs';
export async function deleteSuperheroeByIdService(params) {
  console.log("Estoy en el servicio, este es el ID que me llegó",params);
  return await deleteSuperheroeById(params)
}

export async function obtenerSuperheroePorId(id) {
  console.log(`Estoy en el servicio ${id}`)
  return await getSuperheroeById(id);
}

export async function obtenerTodosLosSuperheroes() {
  return await getSuperheroeById(id);
}

// export async function buscarSuperheroePorAtributo(atributo, valor) {
//   return await superHeroRepository.buscarPorAtributo(atributo, valor);
// }

// export async function obtenerSuperheroesMayoresDe30() {
//   return await superHeroRepository.obtenerMayoresDe30();
// }