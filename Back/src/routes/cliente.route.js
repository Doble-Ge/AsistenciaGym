import { Router } from 'express';
const router = Router();

import { crearCliente, getCliente, getOneCliente } from '../controllers/cliente.controller';

// /api/usuarioa
router.post('/', crearCliente);
router.get('/', getCliente);

// /api/usuario/usuarioaID
router.get('/:dni', getOneCliente);
//router.delete('/:id', deleteUsuario);
//router.put('/:id', updateUsuario);
//router.get('/:cuil', getOneUsuarioCuil);

export default router;