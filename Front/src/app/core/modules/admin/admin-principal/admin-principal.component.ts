import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../../../api-service.service'
import {Cliente} from '../../../models/cliente'
@Component({
  selector: 'app-admin-principal',
  templateUrl: './admin-principal.component.html',
  styleUrls: ['./admin-principal.component.css']
})
export class AdminPrincipalComponent implements OnInit {
  clientes!:Cliente[];
  constructor(private service : ApiServiceService) { }

  ngOnInit(): void {
    this.service.obtenerClientes().subscribe(clientes =>{
      console.log(clientes);
      this.clientes=clientes;
    })
  }

}
