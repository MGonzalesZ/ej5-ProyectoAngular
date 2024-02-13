import { Routes } from '@angular/router';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { HomeComponent } from './home/home.component';
import { UpdateEstComponent } from './update-est/update-est.component';
import { RegistroReactiveComponent } from './registro-reactive/registro-reactive.component';

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
    path: 'registro',
    component: RegistroReactiveComponent,
  },
  {
    path: 'editar',
    component: UpdateEstComponent,
  },
  {
    path: '**',
    redirectTo: '/inicio',
  },
];
