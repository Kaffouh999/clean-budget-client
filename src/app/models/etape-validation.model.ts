import { ProcedureValidation } from "./procedure-validation.model";

export interface EtapeValidation {
    id?: number;
    numero: number;
    nom: string;
    description?: string;
    supprimee: boolean;
    procedure?: ProcedureValidation;
}