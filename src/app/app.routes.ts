import { Routes } from '@angular/router';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { HomeComponent } from './home/home.component';
import { RegistroEstComponent } from './registro-est/registro-est.component';
import { UpdateEstComponent } from './update-est/update-est.component';

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
    component: RegistroEstComponent,
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
