import { Router } from 'express';
const router = Router();

import { crearComprobante, deleteComprobante, getComprobante, getOneComprobante, updateComprobante } from '../controllers/comprobante.controller';


// /api/cliente
router.post('/', crearComprobante);
router.get('/', getComprobante);

// /api/cliente/:[parametro]
router.get('/:id', getOneComprobante);
router.delete('/:id', deleteComprobante);
router.put('/:id', updateComprobante);


export default router;