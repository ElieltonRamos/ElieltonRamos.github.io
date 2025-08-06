import { Component } from '@angular/core';
import { CardProject } from '../../components/card-project/card-project';

@Component({
  selector: 'app-projects',
  imports: [CardProject],
  templateUrl: './projects.html',
})
export class Projects {
// home.component.ts
projects = [
  {
    image: 'blue-pdv.png',
    title: 'Blue PDV - Sistema de Estoque e Vendas',
    link: 'https://github.com/ElieltonRamos/blue-pdv',
  },
  {
    image: 'login-social.png',
    title: 'Login Social - Rede Social',
    link: 'https://login-social-one.vercel.app/',
  },
  {
    image: 'fala-facil.png',
    title: 'App Fala Fácil - Acessibilidade para Autistas',
    link: 'https://github.com/ElieltonRamos/app-fala-facil',
  },
];

}
