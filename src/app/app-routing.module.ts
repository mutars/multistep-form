import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainFormComponent} from './main-form/main-form.component';
import {FormCommonComponent} from './form-common/form-common.component';
import {FormVoeComponent} from './form-voe/form-voe.component';

const routes: Routes = [
  {
    path: 'new-order',
    component: MainFormComponent,
    children: [
      {
        path: '',
        redirectTo: 'common',
        pathMatch: 'full'
      },
      {
        path: 'common',
        component: FormCommonComponent
      },
      {
        path: 'voe',
        component: FormVoeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
