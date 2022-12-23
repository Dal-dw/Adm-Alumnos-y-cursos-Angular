import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  /*   options = ['Home', 'Cursos', 'Calendario', 'Calificaciones'];
  icons = ['home', 'shopping_cart', 'event'];
} */
  opcionesObj = [
    {
      opcion: 'Home',
      icono: 'home',
    },
    {
      opcion: 'Cursos',
      icono: 'shopping_cart',
    },
    {
      opcion: 'Calendario',
      icono: 'event',
    },
    {
      opcion: 'Beneficios',
      icono: 'card_giftcard',
    },
  ];
}
