import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Empelado } from '../interface/empleado.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoServiceService {

  private baseUrl:string = 'http://localhost:8080';


  constructor(private http: HttpClient) { }

   empleado?:Empelado;

  getEmpleados():Observable<Empelado[]>{
    return this.http.get<Empelado[]>(`${this.baseUrl}/api/empleados`).pipe(
      tap(response => {
        let clientes = response as Empelado[];
        console.log('servicio empleado: Tap 1 C')
        clientes.forEach( empleado => {
          console.log(empleado.nombre);
        }
        )
      }),
      catchError (error => of ())
    );
  }


datosEmpleadoIn(empleado:Empelado){
  this.empleado=empleado;
}

datosEmpleadoOut():Empelado|undefined{
  return this.empleado;
}


}


