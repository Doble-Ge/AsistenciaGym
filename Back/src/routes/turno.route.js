import { Router } from 'express';
const router = Router();

import { crearTurno, deleteTurno, getOneTurno, getTurno, updateTurno } from '../controllers/turno.controller';

// /api/turno
router.post('/', crearTurno);
router.get('/', getTurno);

// /api/turno/:[parametro]
router.get('/:id', getOneTurno);
router.delete('/:id', deleteTurno);
router.put('/:id', updateTurno);


export default router;