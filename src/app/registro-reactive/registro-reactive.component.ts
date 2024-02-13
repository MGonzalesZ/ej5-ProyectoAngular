import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-registro-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro-reactive.component.html',
  styleUrl: './registro-reactive.component.css',
})
export class RegistroReactiveComponent {
  // nueva manera de inyectar en Angular 17
  // servicioRest = inject(RestApiService);

  // manera clasica de realizar la inyeccion de servicio
  constructor(private servicio_rest: RestApiService) {}

  formNuevoEstudiante = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    matriculado: new FormControl(),
    activo: new FormControl(),
    edad: new FormControl(0, Validators.required),
  });

  intentarGuardar(): void {
    let activo = this.formNuevoEstudiante.value.activo;
    let matriculado = this.formNuevoEstudiante.value.matriculado;
    let act: boolean;
    let matr: boolean;
    if (activo == 'activo') {
      act = true;
    } else {
      act = false;
    }
    if (matriculado == 'si') {
      matr = true;
    } else {
      matr = false;
    }
    this.servicio_rest
      .guardarEstudiante({
        nombre: this.formNuevoEstudiante.value.nombre,
        apellido: this.formNuevoEstudiante.value.apellido,
        matriculado: matr,
        activo: act,
        edad: this.formNuevoEstudiante.value.edad,
      })
      .subscribe((datos) => {
        console.log('El estudiante se registro con exito');
        console.log(datos);
      });
  }
}
