import { Component } from '@angular/core';

interface Asistencia {
  asignatura: string;
  fecha: string;
  presente: boolean;
  hora: string;
}

@Component({
  selector: 'app-mi-asistencia',
  templateUrl: './mi-asistencia.page.html',
  styleUrls: ['./mi-asistencia.page.scss'],
})
export class MiAsistenciaPage {
  asistencias: Asistencia[] = [
    { asignatura: 'Matemáticas', fecha: '2023-10-01', presente: true, hora: '09:00' },
    { asignatura: 'Programación', fecha: '2023-10-02', presente: false, hora: '10:30' },  
    { asignatura: 'Base De Datos', fecha: '2023-10-03', presente: true,hora: '12:00' },
  ];

  constructor() {}
}