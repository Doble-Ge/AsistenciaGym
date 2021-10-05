import Sequelize from 'sequelize';
import { sequelize } from '../database/conexion';

const Alumno = sequelize.define('alumno',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.TEXT
    },
    apellido: {
        type: Sequelize.TEXT    
    },
    dni: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.TEXT
    },
    pass: {
        type: Sequelize.TEXT
    },    
}, {
    timestamps:false
});


export default Alumno;