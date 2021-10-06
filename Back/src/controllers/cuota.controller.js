import { text } from 'express';
import Cuota from '../models/cuota.model';

export async function getCuota(req,res) {
    try{
        const cuota = await Cuota.findAll();
        res.json({
            data: cuota
        });
    } catch (e) {
        console.log(e);
    }
   
}

export async function crearCuota(req, res) {
    const {dias_disponibles, dias_restantes, monto, fecha_vencimiento, descripcion_mes, id_turno} = req.body;
    try {
        let nuevaCuota = await Cuota.create({
            dias_disponibles, 
            dias_restantes, 
            monto, 
            fecha_vencimiento, 
            descripcion_mes, 
            id_turno
        }, {
            fields:['dias_disponibles', 'dias_restantes', 'monto', 'fecha_vencimiento', 'descripcion_mes', 'id_turno']
        });
        if (nuevaCuota) {
            return res.json({
                message: 'Cuota cargada',
                data: nuevaCuota
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

export async function getOneCuota(req,res){
    try {
        const {id} = req.params;
    const cuota = await Cuota.findOne({
        where: {
            id: id
        }
    });
    res.json({
        data: cuota
    });
    }catch (e){
        console.log(e);
    }
}


export async function deleteCuota(req,res){
    try {
        const {id} = req.params;
    const deleteRowCount = await Cuota.destroy({
        where: {
            id: id
        }
    });
    res.json({
        message: "Cuota eliminada",
        count: deleteRowCount
    });
    }catch (e){
        console.log(e);
    }
}

export async function updateCuota(req,res){
    try{
        const {id} = req.params;
    const {dias_disponibles, dias_restantes, monto, fecha_vencimiento, descripcion_mes, id_turno} = req.body;
    
    const cuota = await Cuota.findAll({
        attributes: ['id', 'dias_disponibles', 'dias_restantes', 'monto', 'fecha_vencimiento', 'descripcion_mes', 'id_turno'],
        where: {
            id: id
        }
    });

    if(cuota.length > 0){
        cuota.forEach(async cuota => {
            await cuota.update({
                dias_disponibles, 
                dias_restantes, 
                monto, 
                fecha_vencimiento, 
                descripcion_mes, 
                id_turno
            })
            
        });
    }

    return res.json({
        message: "Cuota actualizada",
        data: cuota
    });
    }catch (e){
        console.log(e);
    }
}
