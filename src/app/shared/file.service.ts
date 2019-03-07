import {Injectable} from '@angular/core';
import {SERVER_API_URL} from '../constants';
import {HttpClient} from '@angular/common/http';
import {IEleve} from './model/eleve';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  public resourceUrl = SERVER_API_URL + '/file';

  constructor(protected http: HttpClient) {
  }
  
}
