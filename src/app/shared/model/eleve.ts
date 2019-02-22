import {Moment} from 'moment';
import {IAdresse} from './adresse';

export interface IEleve {
  id?: number;
  prenom?: string;
  nom?: string;
  dateNaissence?: Moment;
  adresse?: IAdresse;

}

export class Eleve {
  constructor(public id?: number, public prenom?: string, public nom?: string, public dateNaissence?: Moment, public adresse?: IAdresse) {
  }
}
