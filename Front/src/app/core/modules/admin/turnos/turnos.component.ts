import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../../../api-service.service'
import {Cliente} from '../../../models/cliente'
import {Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { Turno } from 'src/app/core/models/turno';
@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit {
  arrayTurnos!: Turno[];
  turnoPorId!:Turno;
  turnoCliente!:Turno;
  constructor(private service:ApiServiceService,private routes:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.obtenerTodosLosTurnos().subscribe((clientes)=>{
      this.arrayTurnos=clientes;
      console.log(this.arrayTurnos)
    })
  }
  revisarTurnos(turno: number){
    this.service.obtenerUnTurnoPorId(turno).subscribe((turno)=>{
      //console.log(turno)
      this.turnoCliente=turno;
      console.log(this.turnoCliente)
    })
  }
}
