import { text } from 'express';
import Cliente from '../models/cliente.model';

export async function getCliente(req,res) {
    try{
        const cliente = await Cliente.findAll();
        res.json({
            data: cliente
        });
    } catch (e) {
        console.log(e);
    }
   
}

export async function crearCliente(req, res) {
    const {nombre, apellido, dni, email, telefono} = req.body;
    try {

        let nuevoCliente = await Cliente.create({
            nombre,
            apellido,
            dni,
            email,
            telefono
        }, {
            fields:['nombre', 'apellido', 'dni', 'email', 'telefono']
        });
        if (nuevoCliente) {
            return res.json({
                message: 'Usuario creado correctamente',
                data: nuevoCliente
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

export async function getOneCliente(req,res){
    try {
        const {dni} = req.params;
    const cliente = await Cliente.findOne({
        where: {
            dni: dni
        }
    });
    res.json({
        data: cliente
    });
    }catch (e){
        console.log(e);
    }
}

export async function getOneClienteID(req,res){
    try {
        const {id} = req.params;
    const cliente = await Cliente.findOne({
        where: {
            id: id
        }
    });
    res.json({
        data: cliente
    });
    }catch (e){
        console.log(e);
    }
}


export async function deleteCliente(req,res){
    try {
        const {dni} = req.params;
    const deleteRowCount = await Cliente.destroy({
        where: {
            dni: dni
        }
    });
    res.json({
        message: "Usuario eliminado con éxito",
        count: deleteRowCount
    });
    }catch (e){
        console.log(e);
    }
}

export async function updateCliente(req,res){
    try{
        const {id} = req.params;
    const {nombre, apellido, dni, email, telefono} = req.body;
    
    const cliente = await Cliente.findAll({
        attributes: ['id', 'nombre', 'apellido', 'dni', 'email', 'telefono'],
        where: {
            id: id
        }
    });

    if(cliente.length > 0){
        cliente.forEach(async cliente => {
            await cliente.update({
                nombre, 
                apellido, 
                dni, 
                email, 
                telefono
            })
            
        });
    }

    return res.json({
        message: "Cliente actualizado con éxito",
        data: cliente
    });
    }catch (e){
        console.log(e);
    }
}
