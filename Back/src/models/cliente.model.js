import Sequelize from 'sequelize';
import { sequelize } from '../database/conexion';
import Comprobante from './comprobante.model';
const { Turno } = require('../models/turno.model')
const Cliente = sequelize.define('cliente', {
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
    timestamps: false
});

//Cliente.belongsTo(Turno, { foreignKey: 'id_cliente', soruceKey: 'id' });

export default Cliente;