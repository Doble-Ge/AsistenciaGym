export class Turno{
    id!:number;
    descripcion!: string;
    horario!: string;
    id_cliente!: number;
    fecha!:Date;
    mes!:number;
    dia!:number;
    mesDescripcion!:string;
    asistencia!:[{
        fecha:Date,
        id_cliente:Number
    }];
    clientes!:[{
        nombre:string,
        apellido:string
    }];
}