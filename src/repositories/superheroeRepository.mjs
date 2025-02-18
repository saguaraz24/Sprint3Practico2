import Superheroe from '../models/superheroe.mjs';

const createSuperheroe = async (data) => {
  try {
    const newSuperheroe = new Superheroe(data);
    await newSuperheroe.save();
    return newSuperheroe;
  } catch (error) {
    throw error;
  }
};

const getAllSuperheroes = async () => {
  try {
    return await Superheroe.find({});
  } catch (error) {
    throw error;
  }
};
const getSuperheroeById = async (id) => {
  try {
     return await Superheroe.findById(id);
     } catch (error) {
       throw error;
      } 
}; const updateSuperheroeById = async (id, data) => { 
  try {
     return await Superheroe.findByIdAndUpdate(id, data, { new: true, runValidators: true }); 
    } catch (error) {
       throw error; } 
}; 

const deleteSuperheroeById = async (id) => {
  try {
    console.log("Estoy en repositorio ",id)
     return await Superheroe.findByIdAndDelete(id); 
    } catch (error) { 
      throw error; } 
    };
    
export { createSuperheroe, getAllSuperheroes, getSuperheroeById, updateSuperheroeById, deleteSuperheroeById };
