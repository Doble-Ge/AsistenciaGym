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


/*export async function deleteUsuario(req,res){
    try {
        const {id} = req.params;
    const deleteRowCount = await Usuario.destroy({
        where: {
            id: id
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

/*export async function updateUsuario(req,res){
    try{
        const {id} = req.params;
    const {nombre, apellido, email, pass, cuil, perfila_id} = req.body;
    
    const usuario = await UsuarioA.findAll({
        attributes: ['id', 'nombre', 'apellido', 'email', 'pass', 'cuil', 'perfila_id'],
        where: {
            id: id
        }
    });

    if(usuario.length > 0){
        usuario.forEach(async usuario => {
            await usuario.update({
                nombre,
                apellido,
                email,
                pass,
                cuil,
                perfila_id
            })
            
        });
    }

    return res.json({
        message: "Usuario actualizado con éxito",
        data: usuario
    });
    }catch (e){
        console.log(e);
    }
}*/
