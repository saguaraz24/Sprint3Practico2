import mongoose from "mongoose";


const superheroSchema = new mongoose.Schema(  
  {  
    id: String,
    nombreSuperHeroe: { type: String, required: [true, 'El nombre del superhéroe es requerido.'],
      trim: true,
      minlength: [3, 'El nombre del superhéroe debe tener al menos 3 caracteres.'],
      maxlength: [60, 'El nombre del superhéroe no puede exceder los 60 caracteres.'] },  

    
    nombreReal: { type: String, required: true },  
    edad: { type: Number, min: 0 },  
    planetaOrigen: { type: String, default: 'Desconocido' },  
    debilidad: String,  
    poderes: [String],  
    aliados: [String],  
    enemigos: [String],  
    createdAt: { type: Date, default: Date.now }  
  },  
  { collection: 'Grupo-09' } // Cambia aquí si es necesario  
);  

export default mongoose.model('SuperHero', superheroSchema);