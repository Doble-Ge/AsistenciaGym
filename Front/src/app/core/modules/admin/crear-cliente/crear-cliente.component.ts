import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/core/api-service.service';
import { Cliente } from 'src/app/core/models/cliente';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  nuevoCliente!:Cliente;
  constructor(private routes : Router, private service : ApiServiceService,private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
  }
  añadirCliente(nombre:string,apellido:string,dni:string,email:string,telefono:string){
    console.log(nombre);
  }
  crearCliente(nombre:string,apellido:string,dni:string,email:string,telefono:string,contrasena:string){
    console.log(nombre,apellido,dni,email,telefono,contrasena);
    
    const nDni= Number(dni);
    this.nuevoCliente= new Cliente;
    const nTelefono= Number(telefono);
    this.nuevoCliente.nombre=nombre;
    this.nuevoCliente.apellido=apellido;
    this.nuevoCliente.contrasena=contrasena;
    this.nuevoCliente.dni=nDni;
    this.nuevoCliente.email=email;
    this.nuevoCliente.telefono=telefono;
    this.service.añadirCliente(this.nuevoCliente).subscribe((resultado=>{
      console.log(resultado)
    }));

    this.routes.navigate(['/hcBWvERHhVtxfqdLn8j3LdejrxFVTU']);
    
  }
}
