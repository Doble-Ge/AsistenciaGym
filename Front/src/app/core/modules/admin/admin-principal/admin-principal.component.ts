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
  arrayClientes!:Cliente[];
  clientePorDni!:Cliente;
  arrayClientesDni!:Cliente[];
  constructor(private service : ApiServiceService,
    private routes : Router,private activeRoute: ActivatedRoute) {
    }
  ngOnInit(): void {
   this.service.obtenerClientes().subscribe((clientes)=>{
      //console.log(clientes)
      this.arrayClientes=clientes;
      //console.log(this.arrayClientes)
    });
   
  }
  
  obtenerClientePorDni(dni:any){
    //console.log(dni)
    this.service.obtenerClientePorDni(dni).subscribe(clienteDni =>{
      //console.log(clienteDni)
      this.clientePorDni = clienteDni;

    })
    
    /*this.arrayClientesDni=this.arrayClientes.filter((clienteDni)=>{
      if(clienteDni.dni==dni){
        //console.log(clienteDni);
        this.clientePorDni=clienteDni;
        console.log("array"+this.clientePorDni.dni)
      }
    })*/
  
}

eliminarUnCliente(dni:any){
  //console.log(dni)
  let dniEliminar:number;
  dniEliminar=dni;
  this.service.eliminarCliente(dniEliminar).subscribe(dnieliminado =>{
    //console.log(dnieliminado)
  });

 this.routes.navigate(['/hcBWvERHhVtxfqdLn8j3LdejrxFVTU']);
 // this.routes.navigateByUrl('http://localhost:4200/hcBWvERHhVtxfqdLn8j3LdejrxFVTU')
}

  editarCliente(id:number,nombre:string,apellido:string,dni:number,email:string,telefono:string){
    //console.log(id)
    this.service.comunicarComponentePrincipalEditarCliente(id,nombre,apellido,dni,email,telefono);
    this.routes.navigate(['/hcBWvERHhVtxfqdLn8j3LdejrxFVTU/editarcliente'])
  }
}