import Sequelize from 'sequelize';
import { sequelize } from '../database/conexion';

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

/*Cliente.hasMany(Comprobante, { foreignKey: 'id_cliente'});
Cliente.BelongsTo(Turno, { foreignKey: "id_cliente"});*/

export default Cliente;