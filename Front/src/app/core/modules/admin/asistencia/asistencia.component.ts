import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../../../api-service.service'
import {Cliente} from '../../../models/cliente'
import {Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { Asistencia } from 'src/app/core/models/asistencia';
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {
 arrayAsistencias!:Asistencia[];
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
}
