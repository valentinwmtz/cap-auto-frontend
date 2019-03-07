import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IEleve} from '../../../shared/model/eleve';
import {EleveService} from '../eleve.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {ErrorService} from '../../../shared/error.service';
import {FormBuilder, Validators} from '@angular/forms';
import {AdresseService} from '../../adresse/adresse.service';
import {IAdresse} from '../../../shared/model/adresse';
import * as moment from 'moment';
import {MatDialog} from '@angular/material';
import {UpdateImageModalComponent} from './update-image-modal/update-image-modal.component';

@Component({
  selector: 'app-eleve-update',
  templateUrl: './eleve-update.component.html',
  styleUrls: ['./eleve-update.component.scss']
})
export class EleveUpdateComponent implements OnInit {
  eleve: IEleve;
  eleveAdresse: IAdresse;

  eleveForm = this.fb.group({
    prenom: ['', Validators.required],
    nom: [''],
    dateNaissence: [''],
  });

  adresseForm = this.fb.group({
    codePostale: [''],
    rue: [''],
    numero: [''],
    ville: [''],
    pays: ['']
  });

  constructor(private route: ActivatedRoute, private router: Router,
              private eleveService: EleveService, private errorService: ErrorService, public dialog: MatDialog,
              private fb: FormBuilder, private adresseService: AdresseService) {
  }


  ngOnInit() {
    this.eleveService.find(this.route.snapshot.params.id).subscribe(
      (res: HttpResponse<IEleve>) => {
        this.eleve = res.body;
        console.log(this.eleve);
        this.eleveForm.patchValue(this.eleve);
        this.eleveForm.patchValue({dateNaissence: moment(this.eleve.dateNaissence).local().format('YYYY-MM-DDThh:mm')});
        this.adresseService.find(this.route.snapshot.params.id).subscribe(
          (resAdresse: HttpResponse<IEleve>) => {
            this.eleveAdresse = resAdresse.body;
            console.log(this.eleveAdresse);
            this.adresseForm.patchValue(this.eleveAdresse);
          },
          (resAdresse: HttpErrorResponse) => this.errorService.onError(resAdresse.message)
        );
      },
      (res: HttpErrorResponse) => this.errorService.onError(res.message)
    );
  }

  updateEleve() {
    const eleveUpdated = this.eleveForm.value;
    eleveUpdated.id = this.eleve.id;
    this.eleveService.update(eleveUpdated).subscribe(
      (res: HttpResponse<IEleve>) => {
        console.log(res.body);
      },
      (resEleve: HttpErrorResponse) => this.errorService.onError(resEleve.message)
    );

    const adresseUpdated = this.adresseForm.value;
    adresseUpdated.id = this.eleveAdresse.id;
    this.adresseService.update(this.eleve.id, adresseUpdated).subscribe(
      (res: HttpResponse<IAdresse>) => {
        console.log(res.body);
      },
      (resAdresse: HttpErrorResponse) => this.errorService.onError(resAdresse.message)
    );
  }

  openModifierImageModal(): void {
    const dialogRef = this.dialog.open(UpdateImageModalComponent, {
      width: 'auto',
      data: {eleve: this.eleve}
    });
  }
}


