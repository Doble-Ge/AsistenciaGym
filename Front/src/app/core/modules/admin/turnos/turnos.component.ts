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
  mesAuxiliar!:number;
  mostrarForm:boolean=false;
  arrayTurnosDiaMes!:Turno[];
  arrayClientesDiaMesTurno!:Turno[];
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
    console.log("turno"+turno)
    this.service.obtenerUnTurnoPorId(turno).subscribe((turno)=>{
      
      this.turnoCliente=turno;
      
      console.log(this.turnoCliente)
      
    })
     
    /*
    let arrayClientes = this.arrayTurnos.filter((turnosClientes)=>{
      if(turnosClientes.){

      }
      else{

      }
    })
    */
  }
  

  filtrarDiasMeses(mes:string){
    if(mes=='Enero'){
      this.arrayDiasMes=this.arrayDiasEnero;
      //console.log(this.arrayDiasMes);
      this.mesAuxiliar=1;
    }
    else if(mes=='Febrero'){
      this.arrayDiasMes=this.arrayDiasFebrero;
      //console.log(this.arrayDiasMes);
      this.mesAuxiliar=2;
    }
    else if(mes=='Marzo'){
      this.arrayDiasMes=this.arrayDiasMarzo;
      //console.log(this.arrayDiasMes);
      this.mesAuxiliar=3;
    }
    else if(mes=='Abril'){
      this.arrayDiasMes=this.arrayDiasAbril;
      //console.log(this.arrayDiasMes);
      this.mesAuxiliar=4;
    }
    else if(mes=='Mayo'){
      this.arrayDiasMes=this.arrayDiasMayo;
     // console.log(this.arrayDiasMes);
      this.mesAuxiliar=5;
    }
    else if(mes=='Junio'){
      this.arrayDiasMes=this.arrayDiasJunio;
      //console.log(this.arrayDiasMes);
      this.mesAuxiliar=6;
    }
    else if(mes=='Julio'){
      this.arrayDiasMes=this.arrayDiasJulio;
      //console.log(this.arrayDiasMes);
      this.mesAuxiliar=7;
    }
    else if(mes=='Agosto'){
      this.arrayDiasMes=this.arrayDiasAgosto;
     // console.log(this.arrayDiasMes);
      this.mesAuxiliar=8;
    }
    else if(mes=='Septiembre'){
      this.arrayDiasMes=this.arrayDiasSeptiembre;
      //console.log(this.arrayDiasMes);
      this.mesAuxiliar=9;
    }
    else if(mes=='Octubre'){
      this.arrayDiasMes=this.arrayDiasOctubre;
      //console.log(this.arrayDiasMes);
      this.mesAuxiliar=10;
    }
    else if(mes=='Noviembre'){
      this.arrayDiasMes=this.arrayDiasNoviembre;
      //console.log(this.arrayDiasMes);
      this.mesAuxiliar=11;
    }
    else{
      this.arrayDiasMes=this.arrayDiasDiciembre;
     // console.log(this.arrayDiasMes);
      this.mesAuxiliar=12;
    }
    //console.log(this.mesAuxiliar)
  }




  filtrarTurnosMeses(mes:number,dia:number){
    //console.log("mes: "+mes + "dia:"+dia)
    let arrayTurnosPorMesyDia= this.arrayTurnos.filter((turnos)=>{
      if(turnos.mes==mes && turnos.dia==dia){
        //console.log(turnos)
    
        return true;
      }
      else{
        console.log("No se encontro el turno")
        return false;
      }
      
    })
    //console.log("arreglo:"+arrayTurnosPorMesyDia);
    this.arrayTurnosDiaMes=arrayTurnosPorMesyDia;
    console.log(this.arrayTurnosDiaMes)
  }

  editarTurnoCliente(idTurno:number,descripcionTurno:string,horario:string,idCliente:number,nombreCliente:string,apellidoCliente:string){
//el horario tiene que ir como string al back
    this.mostrarForm=true;
    console.log("idturno:"+idTurno)
    console.log("turno:"+descripcionTurno)
    console.log("horario:"+horario)
    console.log("cliente:"+idCliente)
    console.log("nombre:"+nombreCliente)
    console.log("apellido:"+apellidoCliente)

    let camposForm={
      turno: idTurno,
      descripcion : descripcionTurno,
      horarioTurno : horario,
      cliente:idCliente,
      nombre:nombreCliente,
      apellido:apellidoCliente

    }

    let inputNombre= document.getElementById("turno");
    
  }


  
  }


