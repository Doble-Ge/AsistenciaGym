import { Router } from 'express';
const router = Router();

import { crearCliente, deleteCliente, getCliente, getOneCliente, getOneClienteID, updateCliente } from '../controllers/cliente.controller';

// /api/cliente
router.post('/', crearCliente);
router.get('/', getCliente);

// /api/cliente/:[parametro]
router.get('/:dni', getOneCliente);
router.get('/:id', getOneClienteID);
router.delete('/:dni', deleteCliente);
router.put('/:id', updateCliente);


export default router;