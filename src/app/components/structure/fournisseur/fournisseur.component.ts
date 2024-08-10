import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../../../models/fournisseur.model';
import { FournisseurService } from './fournisseur.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DatePipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-fournisseur',
  standalone: true,
  imports: [ToolbarModule, TableModule, DatePipe,ButtonModule,InputTextModule],
  templateUrl: './fournisseur.component.html',
  styleUrl: './fournisseur.component.scss'
})
export class FournisseurComponent implements OnInit{

  fournisseurs: Fournisseur[] = [];
  constructor(private fournisseurServ: FournisseurService) {}

  ngOnInit(): void {
    this.fournisseurServ.findAll().subscribe((data: Fournisseur[]) => {
      this.fournisseurs = data;
    });
  }
  openNew() {
    
  }

  deleteFournisseur(fournisseur: Fournisseur) {
    /* this.fournisseurServ.deleteFournisseur(fournisseur.id).subscribe(() => {
      this.fournisseurs = this.fournisseurs.filter(
        (val) => val.id !== fournisseur.id
      );
    }); */
  }

  editFournisseur(fournisseur: Fournisseur) {
    /* this.fournisseur = { ...fournisseur };
    this.displayDialog = true; */
  }
}
