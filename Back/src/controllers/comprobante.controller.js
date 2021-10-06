import { text } from 'express';
import Comprobante from '../models/comprobante.model';

export async function getComprobante(req,res) {
    try{
        const comprobante = await Comprobante.findAll();
        res.json({
            data: comprobante
        });
    } catch (e) {
        console.log(e);
    }
   
}

export async function crearComprobante(req, res) {
    const {fecha, monto, id_cliente} = req.body;
    try {

        let nuevoComprobante = await Comprobante.create({
            fecha,
            monto,
            id_cliente
        }, {
            fields:['fecha', 'monto', 'id_cliente']
        });
        if (nuevoComprobante) {
            return res.json({
                message: 'Comprobante emitido',
                data: nuevoComprobante
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

export async function getOneComprobante(req,res){
    try {
        const {id} = req.params;
    const comprobante = await Comprobante.findOne({
        where: {
            id: id
        }
    });
    res.json({
        data: comprobante
    });
    }catch (e){
        console.log(e);
    }
}


export async function deleteComprobante(req,res){
    try {
        const {id} = req.params;
    const deleteRowCount = await Comprobante.destroy({
        where: {
            id: id
        }
    });
    res.json({
        message: "Comprobante eliminado con éxito",
        count: deleteRowCount
    });
    }catch (e){
        console.log(e);
    }
}

export async function updateComprobante(req,res){
    try{
        const {id} = req.params;
    const {fecha, monto, id_cliente} = req.body;
    
    const comprobante = await Comprobante.findAll({
        attributes: ['fecha', 'monto', 'id_cliente'],
        where: {
            id: id
        }
    });

    if(comprobante.length > 0){
        comprobante.forEach(async comprobante => {
            await comprobante.update({
                fecha, 
                monto, 
                id_cliente
            })
            
        });
    }

    return res.json({
        message: "Cliente actualizado con éxito",
        data: comprobante
    });
    }catch (e){
        console.log(e);
    }
}
