import Sequelize from 'sequelize';
import { sequelize } from '../database/conexion';

import Comprobante from './comprobante.model';
import Turno from './turno.model';

const Cliente = sequelize.define('cliente',{
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
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.TEXT
    },
    telefono: {
        type: Sequelize.INTEGER
    },    
}, {
    timestamps:false
});

/*Cliente.hasMany(Comprobante, { foreignKey: 'id_cliente', sourceKey: 'id'});
Cliente.belongsTo(Turno, { foreignKey: 'id_cliente', soruceKey: 'id'});*/

export default Cliente;