import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EleveComponent} from './eleve.component';
import {EleveDetailComponent} from './eleve-detail/eleve-detail.component';
import {EleveUpdateComponent} from './eleve-update/eleve-update.component';
import {AuthGuard} from '../../auth/auth-guard.service';

const entity = 'eleve';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {path: `${entity}`, component: EleveComponent},
      {path: `${entity}/detail/:id`, component: EleveDetailComponent},
      {path: `${entity}/create/:id`, component: EleveUpdateComponent},
      {path: `${entity}/update/:id`, component: EleveUpdateComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EleveRoutingModule {
}
