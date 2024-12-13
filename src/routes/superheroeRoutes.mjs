import { Router } from 'express';
import { createSuperheroe } from '../controllers/superheroeController.mjs';

const router = Router();

router.post('/nuevosuperheroe', createSuperheroe);

export default router;
