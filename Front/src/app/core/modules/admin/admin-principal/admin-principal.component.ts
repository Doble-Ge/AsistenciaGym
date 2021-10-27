import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../../../api-service.service'
import {Cliente} from '../../../models/cliente'
import {Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admin-principal',
  templateUrl: './admin-principal.component.html',
  styleUrls: ['./admin-principal.component.css']
})
export class AdminPrincipalComponent implements OnInit {
  clientes!:Cliente[];
  clientePorDni!:Cliente;
  constructor(private service : ApiServiceService,
    private routes : Router,private activeRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.service.obtenerClientes().subscribe(clientes =>{
      console.log(clientes);
      this.clientes=clientes;
    });
    
   
  }
  obtenerClientePorDni(dni:any){
    console.log(dni)
    this.routes.navigate(['api/cliente/',dni])
    this.service.obtenerClientePorDni(dni).subscribe(clienteDni =>{
      console.log(clienteDni)
      this.clientePorDni = clienteDni
    })
    
  }
  
}
