import { DemandeBudget } from "./demande-budget.model";
import { Employe } from "./employe.model";
import { EtapeValidation } from "./etape-validation.model";

export interface HistoriqueOperationDemande {
    id?: number;
    operation: TypeOperation;
    dateOperation: string; // ISO 8601 string representation of ZonedDateTime
    commentaire?: string;
    employe?: Employe;
    demande?: DemandeBudget;
    etape?: EtapeValidation;
}