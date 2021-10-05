import express, {json} from 'express';
import morgan from 'morgan';

import alumnoRoutes from './routes/alumno.route';
const app = express ();

//MIDDLEWARES
app.use(morgan('dev'));
app.use(json());


//RUTAS
app.use('/api/alumno', alumnoRoutes);

export default app;
