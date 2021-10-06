import Sequelize from 'sequelize';
import { sequelize } from '../database/conexion';

const Comprobante = sequelize.define('comprobante',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    fecha: {
        type: Sequelize.DATE
    },
    monto: {
        type: Sequelize.DOUBLE    
    },
    id_cliente: {
        type: Sequelize.INTEGER
    },        
}, {
    timestamps:false
});

/*Cliente.hasMany(Comprobante, { foreignKey: 'id_cliente'});
Cliente.BelongsTo(Turno, { foreignKey: "id_cliente"});*/

export default Comprobante;