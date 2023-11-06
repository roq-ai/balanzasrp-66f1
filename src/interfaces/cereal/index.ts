import { GetQueryInterface } from 'interfaces';

export interface CerealInterface {
  id?: string;
  carga: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface CerealGetQueryInterface extends GetQueryInterface {
  id?: string;
  carga?: string;
}
