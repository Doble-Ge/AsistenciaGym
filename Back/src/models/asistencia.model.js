import Sequelize from 'sequelize';
import { sequelize } from '../database/conexion';

const Asistencia = sequelize.define('asistencia', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    fecha: {
        type: Sequelize.DATE
    },
    horario: {
        type: Sequelize.INTEGER
    },
    id_cliente: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

//Asistencia.hasMany(Turno,{foreignKey:'id_cliente',soruceKey:'id'});
//Cliente.belongsTo(Turno, { foreignKey: 'id_cliente', soruceKey: 'id' });
export default Asistencia;