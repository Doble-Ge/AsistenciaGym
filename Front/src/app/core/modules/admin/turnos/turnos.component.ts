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
  arrayDiasMes!:number[];
  arrayTurnosMeses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  arrayDiasEnero=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  arrayDiasFebrero=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
  arrayDiasMarzo=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  arrayDiasAbril=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  arrayDiasMayo=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  arrayDiasJunio=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  arrayDiasJulio=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  arrayDiasAgosto=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  arrayDiasSeptiembre=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  arrayDiasOctubre=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  arrayDiasNoviembre=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  arrayDiasDiciembre=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  constructor(private service:ApiServiceService,private routes:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.obtenerTodosLosTurnos().subscribe((turnos)=>{
      this.arrayTurnos=turnos;
      console.log(this.arrayTurnos)
      //console.log(this.arrayDias)
      
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

    //console.log("mes: "+mes +" "+"numer: "+numMes + "array1 "+this.turnosFebrero[0].mesDescripcion+" array2 "+this.turnosFebrero[1].horario)
    //this.filtrarTurnosMeses(numMes);
  }



  filtrarDiasMeses(mes:string){
    if(mes=='Enero'){
      this.arrayDiasMes=this.arrayDiasEnero;
      console.log(this.arrayDiasMes);
    }
    else if(mes=='Febrero'){
      this.arrayDiasMes=this.arrayDiasFebrero;
      console.log(this.arrayDiasMes);
    }
    else if(mes=='Marzo'){
      this.arrayDiasMes=this.arrayDiasMarzo;
      console.log(this.arrayDiasMes);
    }
    else if(mes=='Abril'){
      this.arrayDiasMes=this.arrayDiasAbril;
      console.log(this.arrayDiasMes);
    }
    else if(mes=='Mayo'){
      this.arrayDiasMes=this.arrayDiasMayo;
      console.log(this.arrayDiasMes);
    }
    else if(mes=='Junio'){
      this.arrayDiasMes=this.arrayDiasJunio;
      console.log(this.arrayDiasMes);
    }
    else if(mes=='Julio'){
      this.arrayDiasMes=this.arrayDiasJulio;
      console.log(this.arrayDiasMes);
    }
    else if(mes=='Agosto'){
      this.arrayDiasMes=this.arrayDiasAgosto;
      console.log(this.arrayDiasMes);
    }
    else if(mes=='Septiembre'){
      this.arrayDiasMes=this.arrayDiasSeptiembre;
      console.log(this.arrayDiasMes);
    }
    else if(mes=='Octubre'){
      this.arrayDiasMes=this.arrayDiasOctubre;
      console.log(this.arrayDiasMes);
    }
    else if(mes=='Noviembre'){
      this.arrayDiasMes=this.arrayDiasNoviembre;
      console.log(this.arrayDiasMes);
    }
    else{
      this.arrayDiasMes=this.arrayDiasDiciembre;
      console.log(this.arrayDiasMes);
    }
    
  }
  filtrarTurnosMeses(mes:number,dia:number){
    let arrayMeses = this.arrayTurnos.filter((turnomes)=>{
      if(turnomes.mes==mes){
        let arrayMesesDias=arrayMeses.filter((turnosMesDia)=>{
          
        })
        return true;
      }
      else{
        console.log("No se encontraron turnos para el mes")
        return false;
      }
    })
  }
  }


