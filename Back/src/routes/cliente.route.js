import { Router } from 'express';
const router = Router();

import { crearCliente, deleteCliente, getCliente, getOneCliente, updateCliente } from '../controllers/cliente.controller';

// /api/cliente
router.post('/', crearCliente);
router.get('/', getCliente);

// /api/cliente/:[parametro]
router.get('/:dni', getOneCliente);
router.delete('/:dni', deleteCliente);
router.put('/:id', updateCliente);


export default router;