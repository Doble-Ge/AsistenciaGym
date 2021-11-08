import express, { json } from 'express';
import morgan from 'morgan';
import Turno from './models/turno.model';


import clienteRoutes from './routes/cliente.route';
import comprobanteRoutes from './routes/comprobante.route';
import cuotaRoutes from './routes/cuota.route';
import turnoRoutes from './routes/turno.route';
import asistenciaRoutes from './routes/asistencia.route'

const app = express();
const cors = require('cors');
//MIDDLEWARES
app.use(morgan('dev'));
app.use(json());
app.use(cors());

//RUTAS
//app.use('/api/alumno', alumnoRoutes);
app.use('/api/cliente', clienteRoutes);
app.use('/api/comprobante', comprobanteRoutes);
app.use('/api/cuota', cuotaRoutes);
app.use('/api/turno', turnoRoutes);
app.use('/api/asistencia', asistenciaRoutes);


export default app;