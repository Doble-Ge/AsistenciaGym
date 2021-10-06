import { Router } from 'express';
const router = Router();

import { crearComprobante, deleteComprobante, getComprobante, getOneComprobante, updateComprobante } from '../controllers/comprobante.controller';


// /api/comprobante
router.post('/', crearComprobante);
router.get('/', getComprobante);

// /api/comprobante/:[parametro]
router.get('/:id', getOneComprobante);
router.delete('/:id', deleteComprobante);
router.put('/:id', updateComprobante);


export default router;