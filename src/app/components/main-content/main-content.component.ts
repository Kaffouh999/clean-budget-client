import { Component, OnInit } from '@angular/core';
import { MainContentService } from './main-content.service';
import { Fournisseur } from '../../models/fournisseur.model';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { DatePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [ToolbarModule, TableModule, DatePipe,ButtonModule,InputTextModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent implements OnInit {
  fournisseurs: Fournisseur[] = [];
  constructor(private mainServ: MainContentService) {}

  ngOnInit(): void {
    this.mainServ.getFournisseurs().subscribe((data: Fournisseur[]) => {
      this.fournisseurs = data;
    });
  }
  openNew() {
    
  }

  deleteFournisseur(fournisseur: Fournisseur) {
    /* this.mainServ.deleteFournisseur(fournisseur.id).subscribe(() => {
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
