import { Argent } from "./argent.model";
import { CategorieDepense } from "./categorie-depense.model";
import { DemandeBudget } from "./demande-budget.model";
import { Employe } from "./employe.model";
import { Fournisseur } from "./fournisseur.model";
import { PartBudget } from "./part-budget.model";

export interface Depense {
    id?: number;
    objectif: string;
    description?: string;
    dateDepense: string; // ISO 8601 string representation of ZonedDateTime
    typeDepense: TypeDepense;
    etatJustification: EtatDepense;
    pieceJointe?: string;
    demande?: DemandeBudget;
    createurDepense?: Employe;
    beneficiaireDepense?: Employe;
    categorie?: CategorieDepense;
    fournisseur?: Fournisseur;
    partBudget?: PartBudget;
    montantDepense?: Argent;
    montantJustifie?: Argent;
}