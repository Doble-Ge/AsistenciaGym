import express, {json} from 'express';
import morgan from 'morgan';

import alumnoRoutes from './routes/alumno.route';
import clienteRoutes from './routes/cliente.route';
const app = express ();

//MIDDLEWARES
app.use(morgan('dev'));
app.use(json());


//RUTAS
//app.use('/api/alumno', alumnoRoutes);
app.use('/api/cliente', clienteRoutes);

export default app;
