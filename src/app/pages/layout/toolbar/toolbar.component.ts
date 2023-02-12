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

  showFiller = false;

  opcionesObj: ToolbarOption[] = [
    {
      option: 'Home',
      icon: 'home',
      path: '',
    },
    {
      option: 'Cursos',
      icon: 'school',
      path: 'cursos',
    },
    {
      option: 'Alumnos',
      icon: 'person',
      path: 'alumnos',
    },
    {
      option: 'Inscripciones',
      icon: 'event',
      path: '',
    },
    {
      option: 'Beneficios',
      icon: 'card_giftcard',
      path: '',
    },
  ];
}
