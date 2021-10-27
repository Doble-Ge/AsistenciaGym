import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../../../api-service.service'
import {Cliente} from '../../../models/cliente'
import {Router} from '@angular/router'
@Component({
  selector: 'app-admin-principal',
  templateUrl: './admin-principal.component.html',
  styleUrls: ['./admin-principal.component.css']
})
export class AdminPrincipalComponent implements OnInit {
  clientes!:Cliente[];
  constructor(private service : ApiServiceService,private routes : Router) { }

  ngOnInit(): void {
    this.service.obtenerClientes().subscribe(clientes =>{
      console.log(clientes);
      this.clientes=clientes;
    });
    this.service.obtenerClientePorDni().subscribe(clientesPorDni=>{
      console.log(clientesPorDni)
    })
  }
  buscarClientePorDni(dni:any){
    console.log(dni)
    this.routes.navigate(['/:dni']);
  }

}
