import { GetQueryInterface } from 'interfaces';

export interface ProductorInterface {
  id?: string;
  razonsocial: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ProductorGetQueryInterface extends GetQueryInterface {
  id?: string;
  razonsocial?: string;
}
