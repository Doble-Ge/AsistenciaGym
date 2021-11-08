import { Router } from 'express';
import { crearAsistencia, deleteAsistencia, getAsistencia, getOneAsistencia, updateAsistencia } from '../controllers/asistencia.controller';
const router = Router();


// api/asistencia
router.get('/', getAsistencia);
router.post('/', crearAsistencia);

// api/asistencia/:[parametro]
router.get('/', getOneAsistencia);
router.delete('/', deleteAsistencia);
router.put('/', updateAsistencia);

export default router; 