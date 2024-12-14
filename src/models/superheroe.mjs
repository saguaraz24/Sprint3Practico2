import mongoose from 'mongoose';

const superheroeSchema = new mongoose.Schema({
  id: String,

  nombreSuperheroe: {
    type: String,
    required: [true, 'El nombre del superhéroe es requerido'],
    trim: true,
    minlength: [3, 'El nombre del superhéroe debe tener al menos 3 caracteres'],
    maxlength: [60, 'El nombre del superhéroe no puede tener más de 60 caracteres']
  },
    nombreReal: { 
      type: String, 
      required: [true, 'El nombre real es requerido'], 
      trim: true, 
      minlength: [3, 'El nombre real debe tener al menos 3 caracteres'], 
      maxlength: [60, 'El nombre real no puede tener más de 60 caracteres']
    },  
    edad: { type: Number, 
      required: [true, 'La edad es requerida'], 
      trim: true, min: [0, 'La edad no puede ser negativa'], 
      validate: { validator: Number.isInteger, 
      message: 'La edad debe ser un número entero' }
    }, 

    planetaOrigen: { type: String, default: 'Desconocido' },  
    debilidad: String,  
    poderes: {type: [String], required: [true, 'Los poderes son requeridos'], validate: { validator: function(array) { return array.length > 0 && array.every(poder => poder.trim().length >= 3 && poder.trim().length <= 60); }, message: 'Cada poder debe tener entre 3 y 60 caracteres sin espacios en blanco' }},  
    aliados: [String],  
    enemigos: [String],  
    createdAt: { type: Date, default: Date.now }  
  
},
{ collection: 'Grupo-09' }
);

const Superheroe = mongoose.model('superheroe', superheroeSchema);

export default Superheroe;