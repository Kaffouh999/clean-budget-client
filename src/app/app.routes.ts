import { Routes } from '@angular/router';
import { AjustementPartBudgetComponent } from './components/budget/ajustement-part-budget/ajustement-part-budget.component';
import { BudgetComponent } from './components/budget/budget/budget.component';
import { CategorieBudgetComponent } from './components/budget/categorie-budget/categorie-budget.component';
import { DemandeBudgetComponent } from './components/demande/demande-budget/demande-budget.component';
import { EtapeValidationComponent } from './components/demande/etape-validation/etape-validation.component';
import { HistoriqueOperationDemandeComponent } from './components/demande/historique-operation-demande/historique-operation-demande.component';
import { CategorieDepenseComponent } from './components/depense/categorie-depense/categorie-depense.component';
import { DepenseComponent } from './components/depense/depense/depense.component';
import { JustificationDepenseComponent } from './components/depense/justification-depense/justification-depense.component';
import { DepartementComponent } from './components/structure/departement/departement.component';
import { EmployeComponent } from './components/structure/employe/employe.component';
import { FournisseurComponent } from './components/structure/fournisseur/fournisseur.component';
import { PartBudgetComponent } from './components/budget/part-budget/part-budget.component';
import { ProcedureValidationComponent } from './components/demande/procedure-validation/procedure-validation.component';

export const routes: Routes = [
  { path: 'ajustement-budget', component: AjustementPartBudgetComponent },
  { path: 'budget', component: BudgetComponent },
  { path: 'categorie-budget', component: CategorieBudgetComponent },
  { path: 'part-budget', component: PartBudgetComponent },
  { path: 'demande-budget', component: DemandeBudgetComponent },
  { path: 'etape-validation', component: EtapeValidationComponent },
  // prettier-ignore
  { path: 'historique-operation-demande', component: HistoriqueOperationDemandeComponent },
  { path: 'procedure-validation', component: ProcedureValidationComponent },
  { path: 'categorie-depense', component: CategorieDepenseComponent },
  { path: 'depense', component: DepenseComponent },
  { path: 'justification-depense', component: JustificationDepenseComponent },
  { path: 'departement', component: DepartementComponent },
  { path: 'employe', component: EmployeComponent },
  { path: 'fournisseur', component: FournisseurComponent },
];
