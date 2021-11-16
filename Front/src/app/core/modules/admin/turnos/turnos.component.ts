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
  turnosFebrero!:Turno[];
  arrayTurnosMeses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  constructor(private service:ApiServiceService,private routes:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.obtenerTodosLosTurnos().subscribe((turnos)=>{
      this.arrayTurnos=turnos;
      console.log(this.arrayTurnos)
      //console.log(this.arrayDias)
      this.turnosFebrero=this.arrayTurnos.filter((turnosMes)=>{
        if(turnosMes.mes==2){
          return true;
        }
        else{
          return false;
        }
      })
    })
  }
  revisarTurnos(turno: number){
    this.service.obtenerUnTurnoPorId(turno).subscribe((turno)=>{
      //console.log(turno)
      this.turnoCliente=turno;
      //console.log(this.turnoCliente)
      
    })
  }
  obtenerTurnosMes(mes:string){
    //console.log(mes)
    let numMes:number;
    if(mes=='Enero'){
      numMes=1;
      console.log("el mes es:"+mes+"numero"+numMes)
    }
    else if(mes=='Febrero'){
      numMes=2;
    }
    else if(mes=='Marzo'){
      numMes=3;
    }
    else if(mes=='Abril'){
      numMes=4;
    }
    else if(mes=='Mayo'){
      numMes=5;
    }
    else if(mes=='Junio'){
      numMes=6;
    }
    else if(mes=='Julio'){
      numMes=7;
    }
    else if(mes=='Agosto'){
      numMes=8;
    }
    else if(mes=='Septiembre'){
      numMes=9;
    }
    else if(mes=='Octubre'){
      numMes=10;
    }
    else if(mes=='Noviembre'){
      numMes=11;
    }
    else{
      numMes=12;
    }

    console.log("mes: "+mes +" "+"numer: "+numMes)
  }

}
