import { Argent } from "./argent.model";
import { Departement } from "./departement.model";

export interface Budget {
    id?: number;
    numeroBudget: string;
    nom: string;
    description?: string;
    dateDebut: string; // ISO 8601 string representation of ZonedDateTime
    departement?: Departement;
    budgetParent?: Budget;
    montantInitial?: Argent;
    montantRestant?: Argent;
}