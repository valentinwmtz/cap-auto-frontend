import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnexionComponent } from './connexion/connexion.component';
import {AuthRoutingModule} from './auth-routing.module';
import {MaterialModule} from '../shared/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ConnexionComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
