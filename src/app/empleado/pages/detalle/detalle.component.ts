import { Component, OnInit } from '@angular/core';
import { EmpleadoServiceService } from '../../services/empleado-service.service';
import { Empelado } from '../../interface/empleado.interface';
import { FormBuilder, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit{

  empleado?:Empelado;



constructor(private fb: FormBuilder,
  private empleadoService : EmpleadoServiceService,
  private router: Router,
){}


isDisabled = true;




  displayedColumns2: string[] = ['identificacion', 'nombre', 'edad', 'fechaNacimiento'];

  public myForm: FormGroup = this.fb.group({
    identificacion:    ['', [Validators.required, Validators.email]],
    nombre: ['',[Validators.required, Validators.minLength]],
    edad: ['',[Validators.required, Validators.minLength]],
    fechaNacimiento: ['',[Validators.required, Validators.minLength]],

  })


  ngOnInit(): void {
    this.empleado=this.empleadoService.datosEmpleadoOut();
    console.log(this.empleado);
    this.myForm.reset(this.empleado);

  }


  editar() {
    console.log('editar');


  }

  volver(){
    this.router.navigate(['/inicio/empleados']);
    console.log('envolver');

  }


}
