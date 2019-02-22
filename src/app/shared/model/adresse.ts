import {IEleve} from './eleve';

export interface IAdresse {
  id?: number;
  codePostale?: number;
  rue?: string;
  numero?: number;
  ville?: string;
  pays?: string;
  eleve?: IEleve;
}

export class Adresse implements IAdresse {
  constructor(public id?: number, public codePostale?: number, public rue?: string, public numero?: number,
              public ville?: string, pays?: string, eleve?: IEleve) {
  }
}
