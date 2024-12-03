import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'inicio',
    loadChildren: ()=> import ('./empleado/empleado.module').then(m => m.PreradicacionModule)
  },

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo:'inicio',
  }
]
