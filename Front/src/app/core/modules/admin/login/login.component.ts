import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private routes:Router) { }

  ngOnInit(): void {
  }
  confirmarLogin(usuario:any,password:any){
    if(usuario==='admin' && password==='admin123'){
      console.log("Usauro"+usuario)
      console.log(password)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Bienvenido Gino Gutierrez',
        showConfirmButton: false,
        timer: 1500
      })
      this.routes.navigate(['/hcBWvERHhVtxfqdLn8j3LdejrxFVTU']);
    }
    else{
      console.log("Usuario:"+usuario)
      Swal.fire({
        icon: 'error',
        title: 'Eror de autenticacion',
        text: 'Por favor verifique su usuario y contraseña..'

      })
      this.routes.navigate(['/admin'])
    }
  }
}
