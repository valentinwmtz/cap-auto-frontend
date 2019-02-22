import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() {
  }

  onError(error) {
    console.error(error);
  }
}
