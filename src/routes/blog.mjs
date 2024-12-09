import express from "express";

const router = express.Router();

router.get('/', (req, res)=> res.send('Lista de Blogs'));
//console.log(`todos los SH con blogs ${req,res}}`);
router.get('/:id', (req, res)=> res.send(`Blogs con ID: ${req.params.id}`));
router.post('/', (req, res)=> res.send('Nuevo Blog Creado'));

export default router;