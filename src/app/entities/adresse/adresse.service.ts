import {Injectable} from '@angular/core';
import {SERVER_API_URL} from '../../constants';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAdresse} from '../../shared/model/adresse';

type EntityResponseType = HttpResponse<IAdresse>;
type EntityArrayResponseType = HttpResponse<IAdresse[]>;


@Injectable({
  providedIn: 'root'
})
export class AdresseService {

  public resourceUrl = SERVER_API_URL + '/adresse';

  constructor(protected http: HttpClient) {
  }


  create(adresse: IAdresse): Observable<EntityResponseType> {
    return this.http.post<IAdresse>(this.resourceUrl, adresse, {observe: 'response'});
  }

  update(eleveId: number, adresse: IAdresse): Observable<EntityResponseType> {
    return this.http.put<IAdresse>(`${this.resourceUrl}/${eleveId}`, adresse, {observe: 'response'});
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IAdresse>(`${this.resourceUrl}/${id}`, {observe: 'response'});
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    return this.http.get<IAdresse[]>(this.resourceUrl, {observe: 'response'});
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, {observe: 'response'});
  }
}
