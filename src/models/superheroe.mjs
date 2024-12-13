import mongoose from 'mongoose';

const superheroeSchema = new mongoose.Schema({
  nombreSuperheroe: {
    type: String,
    required: [true, 'El nombre del superhéroe es requerido'],
    trim: true,
    minlength: [3, 'El nombre del superhéroe debe tener al menos 3 caracteres'],
    maxlength: [60, 'El nombre del superhéroe no puede tener más de 60 caracteres']
  }
});

const Superheroe = mongoose.model('Superheroe', superheroeSchema);

export default Superheroe;