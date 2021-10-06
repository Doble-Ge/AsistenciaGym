import { Router } from 'express';
const router = Router();

import { crearCliente, deleteCliente, getCliente, getOneCliente, updateCliente } from '../controllers/cliente.controller';

// /api/usuarioa
router.post('/', crearCliente);
router.get('/', getCliente);

// /api/usuario/usuarioaID
router.get('/:dni', getOneCliente);
router.delete('/:dni', deleteCliente);
router.put('/:id', updateCliente);
//router.get('/:cuil', getOneUsuarioCuil);

export default router;