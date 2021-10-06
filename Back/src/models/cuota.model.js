import Sequelize from 'sequelize';
import { sequelize } from '../database/conexion';

import Turno from './turno.model';

const Cuota = sequelize.define('cuota',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    dias_disponibles: {
        type: Sequelize.INTEGER
    },
    dias_restantes: {
        type: Sequelize.INTEGER    
    },
    monto: {
        type: Sequelize.DOUBLE
    },
    fecha_vencimiento: {
        type: Sequelize.DATE
    },
    descripcion_mes: {
        type: Sequelize.TEXT
    },
    id_turno: {
        type: Sequelize.INTEGER
    },    
}, {
    timestamps:false
});

//Cliente.hasMany(Comprobante, { foreignKey: 'id_cliente'});
//Cuota.BelongsTo(Turno, { foreignKey: 'id_turno', sourceKey: 'id'});

export default Cuota;