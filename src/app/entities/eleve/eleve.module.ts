import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { EleveRoutingModule } from './eleve-routing.module';
import {EleveComponent} from './eleve.component';
import {EleveDetailComponent} from './eleve-detail/eleve-detail.component';
import {EleveUpdateComponent} from './eleve-update/eleve-update.component';
import {EleveDeleteDialogComponent} from './eleve-delete-dialog/eleve-delete-dialog.component';
import {MaterialModule} from '../../shared/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { UpdateImageModalComponent } from './eleve-update/update-image-modal/update-image-modal.component';
registerLocaleData(localeFr);

@NgModule({
  declarations: [EleveComponent, EleveDetailComponent, EleveUpdateComponent, EleveDeleteDialogComponent, UpdateImageModalComponent],
  imports: [
    CommonModule,
    EleveRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  entryComponents: [UpdateImageModalComponent]
})
export class EleveModule { }
