import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Empelado } from '../../interface/empleado.interface';
import { EmpleadoServiceService } from '../../services/empleado-service.service';
import { tap } from 'rxjs';





const ELEMENT_DATA2: Empelado[] = [

  {identificacion: 1, nombre: 'Hydrogen', edad: 1.0079, fechaNacimiento: new Date(2024, 11, 25)},
  {identificacion: 1, nombre: 'Hydrogen', edad: 1.0079, fechaNacimiento: new Date(2024, 11, 25)},
  {identificacion: 1, nombre: 'Hydrogen', edad: 1.0079, fechaNacimiento: new Date(2024, 11, 25)},
  {identificacion: 1, nombre: 'Hydrogen', edad: 1.0079, fechaNacimiento: new Date()},
  {identificacion: 1, nombre: 'Hydrogen', edad: 1.0079, fechaNacimiento: new Date()},
  {identificacion: 1, nombre: 'Hydrogen', edad: 1.0079, fechaNacimiento: new Date()},
  {identificacion: 1, nombre: 'Hydrogen', edad: 1.0079, fechaNacimiento: new Date()},
];



@Component({
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './step-page.component.html',
  styleUrl: './step-page.component.css'
})
export class StepPageComponent  implements OnInit{

  public empleados: Empelado []=[];

  constructor(private empleadoService : EmpleadoServiceService){}

  // dataSource2: Empelado[]=[];

  ngOnInit(): void {
      this.empleadoService.getEmpleados().pipe(
        tap(empleados => {
          empleados.forEach(empleado => {
            console.log(empleado.nombre);
        });
        })
      ).subscribe(empleados => this.empleados = empleados)
      console.log(this.empleados);
     // this.dataSource2 = this.empleados;
      //console.log(this.dataSource2);



    }






    displayedColumns2: string[] = ['identificacion', 'nombre', 'edad', 'fechaNacimiento'];
   // dataSource2 = ELEMENT_DATA2;
    dataSource2 = this.empleados;


}
