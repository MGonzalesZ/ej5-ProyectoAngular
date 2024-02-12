import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RestApiService } from './services/rest-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private anios_rene = 23;

  constructor(private servicio_rest: RestApiService) {}

  ngOnInit(): void {
    // this.servicio_rest.getEstudiantes().subscribe((datos) => {
    //   console.log(datos);
    // });

    // CON ARROW FUNCTION
    this.servicio_rest.getEstudiante('d6d3').subscribe((datosEstudiante) => {
      console.log('Estos son los datos requeridos del estudiante');
      console.log(datosEstudiante);
    });

    // ALTERNATIVA CON FUNCION TRADICIONAL
    // this.servicio_rest
    //   .getEstudiante('d6d3')
    //   .subscribe(function (datosEstudiante) {
    //     console.log('Estos son los datos requeridos del estudiante');
    //     console.log(datosEstudiante);
    //   });
  }

  guardarDatos(): void {
    this.servicio_rest
      .guardarEstudiante({
        nombre: 'Rene',
        apellido: 'Paredes',
        matriculado: false,
        activo: false,
        edad: 23,
      })
      .subscribe((datos) => {
        console.log('El nuevo estudiante está guardado correctamente');
        console.log(datos);
      });
  }

  cumpleRene(): void {
    this.anios_rene++;
    this.servicio_rest
      .editarEstudiante('d6d3', {
        nombre: 'Rene',
        apellido: 'Paredes',
        matriculado: false,
        activo: false,
        edad: this.anios_rene,
      })
      .subscribe((datos) => {
        console.log('Se ha actualizado la edad de Rene');
        console.log(datos);
      });
  }

  eliminarRene(): void {
    this.servicio_rest.eliminarEstudiante('d6d3').subscribe((datos) => {
      console.log('Se ha eliminado al estudiante Rene');
      console.log(datos);
    });
  }
}
