import { Argent } from "./argent.model";
import { Budget } from "./budget.model";
import { CategorieBudget } from "./categorie-budget.model";
import { Employe } from "./employe.model";

export interface PartBudget {
    id?: number;
    nom: string;
    description?: string;
    datePartition: string; // ISO 8601 string representation of ZonedDateTime
    budgetParent?: Budget;
    operateur?: Employe;
    categorie?: CategorieBudget;
    montantInitial?: Argent;
    montantComptabilise?: Argent;
    montantSorti?: Argent;
    montantAlerteMini?: Argent;
}