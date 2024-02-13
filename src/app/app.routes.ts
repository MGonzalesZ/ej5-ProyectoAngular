import { Routes } from '@angular/router';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'nosotros',
    component: NosotrosComponent,
  },
  {
    path: 'noticias',
    component: NoticiasComponent,
  },
  {
    path: 'inicio',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: '/inicio',
  },
];
