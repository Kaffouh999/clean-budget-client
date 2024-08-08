import { Argent } from "./argent.model";
import { Depense } from "./depense.model";
import { Employe } from "./employe.model";

export interface JustificationDepense {
    id?: number;
    dateJustification: string; // ISO 8601 string representation of ZonedDateTime
    etat: EtatJustification;
    pieceJointe?: string;
    commentaire?: string;
    justificateur?: Employe;
    depenseJustifiee?: Depense;
    montantJustifie?: Argent;
}