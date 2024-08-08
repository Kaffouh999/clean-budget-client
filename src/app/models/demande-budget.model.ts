import { Argent } from "./argent.model";
import { Employe } from "./employe.model";
import { EtapeValidation } from "./etape-validation.model";

export interface DemandeBudget {
    id?: number;
    objectif: string;
    description?: string;
    dateDemande: string; // ISO 8601 string representation of ZonedDateTime
    etat: EtatDemande;
    demandeur?: Employe;
    montantDemande?: Argent;
    etapeEnCours?: EtapeValidation;
}