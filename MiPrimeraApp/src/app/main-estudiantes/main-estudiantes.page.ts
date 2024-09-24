import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-estudiantes',
  templateUrl: './main-estudiantes.page.html',
  styleUrls: ['./main-estudiantes.page.scss'],
})
export class MainEstudiantesPage {
  nombreUsuario: string = 'Ignacio González';

  constructor(private router: Router) {}

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }

  logout() {
    this.router.navigate(['/login'], {replaceUrl: true});
  }
}
