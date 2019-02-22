import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EleveRoutingModule } from './eleve-routing.module';
import {EleveComponent} from './eleve.component';
import {EleveDetailComponent} from './eleve-detail/eleve-detail.component';
import {EleveUpdateComponent} from './eleve-update/eleve-update.component';
import {EleveDeleteDialogComponent} from './eleve-delete-dialog/eleve-delete-dialog.component';
import {MaterialModule} from '../../shared/material/material.module';

@NgModule({
  declarations: [EleveComponent, EleveDetailComponent, EleveUpdateComponent, EleveDeleteDialogComponent],
  imports: [
    CommonModule,
    EleveRoutingModule,
    MaterialModule
  ]
})
export class EleveModule { }
