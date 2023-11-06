import { GetQueryInterface } from 'interfaces';

export interface TransportistaInterface {
  id?: string;
  razonsocial: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface TransportistaGetQueryInterface extends GetQueryInterface {
  id?: string;
  razonsocial?: string;
}
