import { Departement } from './departement.model';

export interface ProcedureValidation {
  id?: number;
  nom: string;
  description: string;
  supprime: boolean;
  departement: Departement;
}
