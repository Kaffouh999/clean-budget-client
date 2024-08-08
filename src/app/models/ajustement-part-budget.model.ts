import { Argent } from "./argent.model";
import { Employe } from "./employe.model";
import { PartBudget } from "./part-budget.model";

export interface AjustementPartBudget {
    id?: number;
    objectif: string;
    description?: string;
    dateOperation: string; 
    employe?: Employe;
    budgetSource?: PartBudget;
    budgetDestination?: PartBudget;
    montantAjustement?: Argent;
}