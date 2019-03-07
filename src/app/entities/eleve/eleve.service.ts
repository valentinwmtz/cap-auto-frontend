import {Injectable} from '@angular/core';
import {SERVER_API_URL} from '../../constants';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {IEleve} from '../../shared/model/eleve';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as moment from 'moment';

type EntityResponseType = HttpResponse<IEleve>;
type EntityArrayResponseType = HttpResponse<IEleve[]>;

@Injectable({
  providedIn: 'root'
})
export class EleveService {

  public resourceUrl = SERVER_API_URL + '/eleve';

  authHeader = new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  });

  authToken = 'Bearer ' + localStorage.getItem('token');

  constructor(protected http: HttpClient) {
  }

  create(eleve: IEleve): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(eleve);
    return this.http
      .post<IEleve>(this.resourceUrl, copy, {observe: 'response', headers: this.authHeader})
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(eleve: IEleve): Observable<EntityResponseType> {
    return this.http
      .put<IEleve>(this.resourceUrl, eleve, {observe: 'response', headers: this.authHeader})
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IEleve>(`${this.resourceUrl}/${id}`, {observe: 'response', headers: this.authHeader})
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(): Observable<EntityArrayResponseType> {
    return this.http
      .get<IEleve[]>(this.resourceUrl, {observe: 'response', headers: this.authHeader})
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, {observe: 'response'});
  }

  uploadPicture(id, photo): Observable<HttpResponse<any>> {
    const input = new FormData();
    input.append('file', photo);
    return this.http.post<any>(`${SERVER_API_URL}/file/upload/eleve/photo/${id}`, input, {observe: 'response'});
  }

  private convertDateFromClient(eleve: IEleve): IEleve {
    return Object.assign({}, eleve, {
      date: eleve.dateNaissence != null && eleve.dateNaissence.isValid() ? eleve.dateNaissence.toJSON() : null
    });
  }

  private convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.dateNaissence = res.body.dateNaissence != null ? moment(res.body.dateNaissence) : null;
    }
    return res;
  }

  private convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((eleve: IEleve) => {
        eleve.dateNaissence = eleve.dateNaissence != null ? moment(eleve.dateNaissence) : null;
      });
    }
    return res;
  }
}
