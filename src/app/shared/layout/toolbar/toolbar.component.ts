import { Component, OnInit } from '@angular/core';
import {
  ToolbarOption,
  ToolbarOptions,
} from '../../../models/toolbar-options.model';

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
      icono: 'school',
    },
    {
      opcion: 'Alumnos',
      icono: 'person',
    },
    {
      opcion: 'Inscripciones',
      icono: 'event',
    },
    {
      opcion: 'Beneficios',
      icono: 'card_giftcard',
    },
  ];
}
