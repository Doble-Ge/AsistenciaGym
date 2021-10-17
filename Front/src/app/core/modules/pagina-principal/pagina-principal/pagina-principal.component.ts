import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../../../api-service.service'
import {Cliente} from '../../../models/cliente'
@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {
  clientes!:Cliente[];
  constructor(private service : ApiServiceService) { }

  ngOnInit(): void {
    this.service.obtenerClientes().subscribe(clientes =>{
      console.log(clientes);
      this.clientes=clientes;
    })
  }
  
}
