import { Router } from 'express';
const router = Router();

import { getAlumno } from '../controllers/alumno.controller';

// /api/usuarioa
//router.post('/', crearUsuario);
router.get('/', getAlumno);

// /api/usuario/usuarioaID
//router.get('/:id', getOneUsuario);
//router.delete('/:id', deleteUsuario);
//router.put('/:id', updateUsuario);
//router.get('/:cuil', getOneUsuarioCuil);

export default router;