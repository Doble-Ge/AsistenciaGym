import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../../../api-service.service'
import {Cliente} from '../../../models/cliente'
import {Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { Asistencia } from 'src/app/core/models/asistencia';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {
 arrayAsistencias!:Asistencia[];
 generarAsitencia:boolean=false;
 mostrarFormBuscador:boolean=false;
 asistencia!:Asistencia;
  constructor(private service:ApiServiceService,private routes:Router, private activeRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.obtenerAsistencia()
  }
  obtenerAsistencia(){
    this.service.obtenerTodasLasAsistencias().subscribe((asistencias)=>{
    this.arrayAsistencias=asistencias;
    console.log(asistencias)
    })
  }

  desplezarFormAgregarAsistencia(){
    this.generarAsitencia=true;
  }

  generarAsistencias(nombre:string,apellido:string,fecha:string,turno:string){
    this.asistencia=new Asistencia()
    this.asistencia.nombre=nombre
    this.asistencia.apellido=apellido
    this.asistencia.fecha=fecha;
    this.asistencia.turno=turno;

    this.service.generarAsitencia(this.asistencia).subscribe((resultado)=>{
      console.log(resultado);
    });
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    this.routes.navigate(['/hcBWvERHhVtxfqdLn8j3LdejrxFVTU'])
  }


  ocultarFormGenerarAsistencia(){
    this.generarAsitencia=false;
  }

  mostrarDivBuscador(){
    this.mostrarFormBuscador=true;
  }
  ocultarDivBuscador(){
    this.mostrarFormBuscador=false;
  }
}
