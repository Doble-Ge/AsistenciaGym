import { text } from 'express';
import Asistencia
from '../models/asistencia.model';
import Turno from '../models/turno.model';
export async function getAsistencia(req, res) {
    try {
        const asistencia = await Asistencia.findAll();
        res.json(asistencia);
    } catch (e) {
        console.log(e);
    }

}

export async function crearAsistencia(req, res) {
    const { fecha, id_cliente, nombre, apellido, turno } = req.body;
    try {

        let nuevoAsistencia = await Asistencia.create({
            fecha,
            id_cliente,
            nombre,
            apellido,
            turno
        }, {
            fields: ['fecha', 'id_cliente', 'nombre', 'apellido', 'turno']
        });
        if (nuevoAsistencia) {
            return res.json({
                message: 'Asistencia registrada con éxito',
                data: nuevoAsistencia
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'No anda pa',
            data: {}
        });
    }

}

export async function getOneAsistencia(req, res) {
    try {
        const { id_cliente } = req.params;
        const asistencia = await Asistencia.findOne({
            where: {
                dni: dni
            }
        });
        res.json(asistencia);
    } catch (e) {
        console.log(e);
    }
}

export async function getOneAsistenciaID(req, res) {
    try {
        const { id } = req.params;
        const asistencia = await Asistencia.findOne({
            where: {
                id: id
            }
        });
        res.json({
            data: asistencia
        });
    } catch (e) {
        console.log(e);
    }
}


export async function deleteAsistencia(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Asistencia.destroy({
            where: {
                id: id
            }
        });
        res.json({
            message: "Asistencia eliminada",
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
    }
}

export async function updateAsistencia(req, res) {
    try {
        const { id } = req.params;
        const { fecha, horario, id_cliente } = req.body;

        const asistencia = await Asistencia.findAll({
            attributes: ['id', 'fecha', 'horario', 'id_cliente'],
            where: {
                id: id
            }
        });

        if (cliente.length > 0) {
            cliente.forEach(async cliente => {
                await cliente.update({
                    fecha,
                    horario,
                    id_cliente
                })

            });
        }

        return res.json({
            message: "Asistencia actualizada con éxito",
            data: cliente
        });
    } catch (e) {
        console.log(e);
    }
}