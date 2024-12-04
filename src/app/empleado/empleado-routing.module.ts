import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { IntroPageComponent } from './pages/intro-page/intro-page.component';
import { StepPageComponent } from './pages/step-page/step-page.component';
import { DetalleComponent } from './pages/detalle/detalle.component';

const routes: Routes = [
  { path: '',
    component: LayoutPageComponent,
    children:[
      {path: 'intro', component: IntroPageComponent},
      {path: 'empleados', component: StepPageComponent},
      {path: 'detalle', component: DetalleComponent},
      {path: '**', redirectTo: 'intro'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreradicacionRoutingModule { }
