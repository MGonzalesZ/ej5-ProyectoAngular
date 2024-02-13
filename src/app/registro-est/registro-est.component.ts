import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// En Angular existen dos tipos de formularios:
// 1 form-templates
// Para edicion en updateEst se usara reactive-forms (formularios reactivos)

@Component({
  selector: 'app-registro-est',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro-est.component.html',
  styleUrl: './registro-est.component.css',
})
export class RegistroEstComponent {
  nombreEstudiante = '';
  apellidoEstudiante = '';
  edad = 0;

  VerificarDatos(): void {
    if (this.edad > 13 && this.edad < 99) {
      console.log('Los datos se enviaran al servidor');
    } else {
      alert('Los datos son incorrectos');
    }
  }
}
