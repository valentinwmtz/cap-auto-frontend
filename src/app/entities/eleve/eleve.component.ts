import {Component, OnInit} from '@angular/core';
import {EleveService} from './eleve.service';
import {IEleve} from '../../shared/model/eleve';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {ErrorService} from '../../shared/error.service';

@Component({
  selector: 'app-eleve',
  templateUrl: './eleve.component.html',
  styleUrls: ['./eleve.component.scss']
})
export class EleveComponent implements OnInit {

  eleves: IEleve[];

  constructor(private eleveService: EleveService, private errorService: ErrorService) {
  }

  ngOnInit() {
    this.eleveService.query().subscribe(
      (res: HttpResponse<IEleve[]>) => {
        this.eleves = res.body;
        console.log(this.eleves);
      },
      (res: HttpErrorResponse) => this.errorService.onError(res.message)
    );
  }
}
