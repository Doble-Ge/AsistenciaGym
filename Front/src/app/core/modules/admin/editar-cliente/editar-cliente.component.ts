import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/core/api-service.service';
import { Cliente } from 'src/app/core/models/cliente';
@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  editarCliente!:Cliente;
  constructor(private routes : Router, private service : ApiServiceService,private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
   
    //console.log("hola"+this.editarCliente)
  }

}
