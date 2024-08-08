import { Employe } from "./employe.model";
import { EtapeValidation } from "./etape-validation.model";

export interface EtapeEmploye {
    id?: number;
    etape?: EtapeValidation;
    validateur?: Employe;
}