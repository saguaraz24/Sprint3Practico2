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

export { createSuperheroe };
