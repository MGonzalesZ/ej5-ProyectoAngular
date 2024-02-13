import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

//2. FORMULARIOS REACTIVOS

@Component({
  selector: 'app-update-est',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-est.component.html',
  styleUrl: './update-est.component.css',
})
export class UpdateEstComponent {
  validado = false;

  formularioEstudiante = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    edad: new FormControl(),
  });

  procesarGuardado(): void {
    let anios = this.formularioEstudiante.value.edad;
    if (anios >= 18) {
      this.validado = true;
    } else {
      this.validado = false;
      alert('Edad incorrecta');
    }
  }
}
