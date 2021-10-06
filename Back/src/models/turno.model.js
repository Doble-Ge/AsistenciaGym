import Sequelize from 'sequelize';
import { sequelize } from '../database/conexion';
import Cliente from './cliente.model';
import Cuota from './cuota.model';

const Turno = sequelize.define('turno',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    horario: {
        type: Sequelize.TEXT
    },   
    descripcion: {
        type: Sequelize.TEXT
    },
    id_cliente: {
        type: Sequelize.INTEGER
    },    
}, {
    timestamps:false
});

//Turno.hasMany(Cliente, { foreignKey: 'id_cliente', sourceKey: 'id'});
//Turno.hasMany(Cuota, { foreignKey: 'id_turno', sourceKey: 'id'});

export default Turno;