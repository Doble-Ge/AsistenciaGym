//getOneTurno

import { text } from 'express';
import Turno from '../models/turno.model';
import Asitencia from '../models/asistencia.model'
import Asistencia from '../models/asistencia.model';
import Cliente from '../models/cliente.model';
export async function getTurnoAsistenciaHolis(req, res) {
    try {
        const turno = await Turno.findAll({
            include: [{
                model: Cliente,
                attributes: ['nombre', 'apellido']
            }]
        }).then((turnos) => {
            res.json(turnos)
            console.log(turnos)
        })
    } catch (e) {
        console.log(e);
    }

}
export async function getTurno(req, res) {
    try {
        const turno = await Turno.findAll();
        res.json({
            data: turno
        });
    } catch (e) {
        console.log(e);
    }

}

export async function crearTurno(req, res) {
    const { horario, descripcion, id_cliente } = req.body;
    try {

        let nuevoTurno = await Turno.create({
            horario,
            descripcion,
            id_cliente
        }, {
            fields: ['horario', 'descripcion', 'id_cliente']
        });
        if (nuevoTurno) {
            return res.json({
                message: 'Turno creado',
                data: nuevoTurno
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

export async function getOneTurno(req, res) {
    try {
        const { id } = req.params;
        const turno = await Turno.findOne({
            where: {
                id: id
            },
            include: [{
                model: Cliente,
                attributes: ['nombre', 'apellido']
            }]
        });
        res.json(turno);
    } catch (e) {
        console.log(e);
    }
}


export async function deleteTurno(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Turno.destroy({
            where: {
                id: id
            }
        });
        res.json({
            message: "Turno eliminado",
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
    }
}

export async function updateTurno(req, res) {
    try {
        const { id } = req.params;
        const { horario, descripcion, id_cliente } = req.body;

        const turno = await Turno.findAll({
            attributes: ['id', 'horario', 'descripcion', 'id_cliente'],
            where: {
                id: id
            }
        });

        if (turno.length > 0) {
            turno.forEach(async turno => {
                await turno.update({
                    horario,
                    descripcion,
                    id_cliente
                })

            });
        }

        return res.json({
            message: "Turno actualizado con éxito",
            data: turno
        });
    } catch (e) {
        console.log(e);
    }
}