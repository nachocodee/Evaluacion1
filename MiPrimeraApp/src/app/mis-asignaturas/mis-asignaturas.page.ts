import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-asignaturas',
  templateUrl: './mis-asignaturas.page.html',
  styleUrls: ['./mis-asignaturas.page.scss'],
})
export class MisAsignaturasPage {
  asignaturas = [
    {
      nombre: 'Matemáticas',
      profesor: 'Juanito',
      horario: '09:00 - 10:15',
      sala: 'A-112',
    },
    {
      nombre: 'Programación',
      profesor: 'Pato',
      horario: '10:30 - 11:50',
      sala: 'B-132',
    },
    {
      nombre: 'Base De Datos',
      profesor: 'Tomas',
      horario: '12:00 - 01:50',
      sala: 'C-283',
    },
    {
      nombre: 'Arquitectura',
      profesor: 'Roberto Flores',
      horario: '02:00 - 02:50',
      sala: 'D-344',
    },
    {
      nombre: 'Calidad de Software',
      profesor: 'Ramiro',
      horario: '03:00 - 04:00',
      sala: 'E-412',
    },
  ];
}
