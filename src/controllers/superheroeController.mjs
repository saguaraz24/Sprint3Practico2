import { createSuperheroe } from '../repositories/superheroeRepository.mjs';

const createSuperheroeHandler = async (req, res) => {
  try {
    const newSuperheroe = await createSuperheroe(req.body);
    res.status(201).json(newSuperheroe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { createSuperheroeHandler as createSuperheroe };
