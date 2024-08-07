import { Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SecondContentComponent } from './components/second-content/second-content.component';

export const routes: Routes = [
    {path: 'departements', component: SecondContentComponent},
    {path: 'fournisseurs', component: MainContentComponent},
];