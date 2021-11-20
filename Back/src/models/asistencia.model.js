import Sequelize from 'sequelize';
import { sequelize } from '../database/conexion';

const Asistencia = sequelize.define('asistencia', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    fecha: {
        type: Sequelize.TEXT
    },
    horario: {
        type: Sequelize.INTEGER
    },
    id_cliente: {
        type: Sequelize.INTEGER
    },
    nombre: {
        type: Sequelize.TEXT
    },
    apellido: {
        type: Sequelize.TEXT
    },
    turno: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});
//Asistencia.hasMany(Cliente, { foreignKey: 'id_cliente', sourceKey: 'id' });
//Asistencia.hasMany(Turno,{foreignKey:'id_cliente',soruceKey:'id'});
//Cliente.belongsTo(Turno, { foreignKey: 'id_cliente', soruceKey: 'id' });
export default Asistencia;