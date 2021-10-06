import express, {json} from 'express';
import morgan from 'morgan';
import Turno from './models/turno.model';


import clienteRoutes from './routes/cliente.route';
import comprobanteRoutes from './routes/comprobante.route';
import cuotaRoutes from './routes/cuota.route';
import turnoRoutes from './routes/turno.route';
const app = express ();

//MIDDLEWARES
app.use(morgan('dev'));
app.use(json());


//RUTAS
//app.use('/api/alumno', alumnoRoutes);
app.use('/api/cliente', clienteRoutes);
app.use('/api/comprobante', comprobanteRoutes);
app.use('/api/cuota', cuotaRoutes);
app.use('/api/turno', turnoRoutes);


export default app;
