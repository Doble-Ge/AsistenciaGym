import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {Cliente} from 'src/app/core/models/cliente'
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private url = 'http://localhost:4000/';
  constructor(private http : HttpClient) {
   }

   obtenerClientes():Observable<Cliente[]>{
     return this.http.get<Cliente[]>(this.url+'api/cliente')
   }
   obtenerClientePorDni(dniCliente:number):Observable<Cliente>{
    return this.http.get<Cliente>(this.url+'api/cliente/'+dniCliente);
   }
   añadirCliente(cliente:Cliente){
     console.log(cliente);
     return this.http.post(this.url+'api/cliente/', cliente)
   }
}
