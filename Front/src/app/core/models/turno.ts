export class Turno{
    id!:number;
    descripcion!: string;
    horario!: string;
    id_cliente!: number;
    fecha_Turno!:Date;
    asistencia!:[{
        fecha:Date,
        id_cliente:Number
    }];
    clientes!:[{
        nombre:string,
        apellido:string
    }];
}