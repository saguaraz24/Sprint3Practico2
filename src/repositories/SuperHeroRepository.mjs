import SuperHero from "../models/SuperHero.mjs";
import IRepository from "./IRepository.mjs";

class SuperHeroRepository extends IRepository {
  async obtenerPorId(id) {
    console.log(`Estoy en el Repositorio ${id}`)
   
    return await SuperHero.findById(id);
  }

  async obtenerTodos() {
    return await SuperHero.find({});
  }
  async buscarPorAtributo(atributo, valor) {
    let query;
  
    // Verificar si el valor es numérico
    if (!isNaN(valor)) {
      query = { [atributo]: Number(valor) }; // Convertir el valor a número y buscar una coincidencia exacta
    } else {
      query = { [atributo]: new RegExp(valor, 'i') }; // Usar expresión regular para cadenas de texto
    }
  
    return await SuperHero.find(query);
  }
 
   async obtenerMayoresDe30() {
    
  //   return await SuperHero.find({ edad: { $gt: 30 }, planetaOrigen: 'Tierra', poderes: { $size: { $gte: 2 }}});
  // }
  return await SuperHero.find({
    $and: [
      { edad: { $gt: 30 } },
      { planetaOrigen: 'Tierra' },
      { poderes: { $exists: true, $not: { $size: 0 } } }, // Verifica que poderes sea un arreglo no vacío
    ],
  })
  
}
}

export default new SuperHeroRepository();