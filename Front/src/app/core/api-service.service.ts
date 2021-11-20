import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {Cliente} from 'src/app/core/models/cliente'
import { Asistencia } from './models/asistencia';
import { AsistenciaComponent } from './modules/admin/asistencia/asistencia.component';
import { Turno } from './models/turno';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private url = 'http://localhost:4000/';

  auxIdCliente!:number;
  auxNombreCliente!:string;
  auxApellidoCliente!:string;
  auxEmailCliente!:string;
  auxTelefonoCliente!:string;
  auxDniCliente!:number
  constructor(private http : HttpClient) {
   }
   //--------------------- FUNCIONES CLIENTE ---------------------
   obtenerClientes():Observable<Cliente[]>{
     return this.http.get<Cliente[]>(this.url+'api/cliente')
   }
   obtenerClientePorDni(dniCliente:number):Observable<Cliente>{
    return this.http.get<Cliente>(this.url+'api/cliente/'+dniCliente);
   }
   añadirCliente(cliente:Cliente){
     console.log(cliente);
     return this.http.post(this.url+'api/cliente/', cliente);
   }

  eliminarCliente(dni:number){
    console.log("dni a eliminar"+ " "+dni)
    return this.http.delete(this.url+'api/cliente/'+ dni);
    //console.log(dni)
    //return this.http.delete(this.url+'api/cliente/'+dni);
  }


  // --------------------- FUNCIONES ASISTENCIAS ---------------------
  obtenerTodasLasAsistencias():Observable<Asistencia[]>{
    return this.http.get<Asistencia[]>(this.url+'api/asistencia');
  }

  // --------------------- SERVICIO TURNOS ---------------------

  obtenerTodosLosTurnos():Observable<Turno[]>{
    return this.http.get<Turno[]>(this.url+'api/turno/turnoasistencia');
  }
  obtenerUnTurnoPorId(id_turno:number):Observable<Turno>{
    return this.http.get<Turno>(this.url+'api/turno/'+id_turno);
  }

  comunicarComponentePrincipalEditarCliente(id:number,nombre:string,apellido:string,dni:number,email:string,telefono:string){
    console.log(id,dni,email,nombre,apellido,telefono)
    this.auxIdCliente=id;
    this.auxNombreCliente=nombre
    this.auxApellidoCliente=apellido
    this.auxTelefonoCliente=telefono
    this.auxEmailCliente=email
    this.auxDniCliente=dni;
  }

}
