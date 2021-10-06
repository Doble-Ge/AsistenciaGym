import { Router } from 'express';
import { crearCuota, deleteCuota, getCuota, getOneCuota, updateCuota } from '../controllers/cuota.controller';
const router = Router();



// /api/cuota
router.post('/', crearCuota);
router.get('/', getCuota);

// /api/cuota/:[parametro]
router.get('/:id', getOneCuota);
router.delete('/:id', deleteCuota);
router.put('/:id', updateCuota);


export default router;