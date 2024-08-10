import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../../../models/fournisseur.model';
import { FournisseurService } from './fournisseur.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DatePipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FournisseurAddDialog } from './fournisseur-add-dialog';

@Component({
  providers: [DialogService],
  selector: 'app-fournisseur',
  standalone: true,
  imports: [ToolbarModule, TableModule, DatePipe,ButtonModule,InputTextModule,DynamicDialogModule],
  templateUrl: './fournisseur.component.html',
  styleUrl: './fournisseur.component.scss'
})
export class FournisseurComponent implements OnInit{
  ref: DynamicDialogRef | undefined;
  fournisseurs: Fournisseur[] = [];
  constructor(private fournisseurServ: FournisseurService,private dialogService: DialogService) {}

  ngOnInit(): void {
    this.fournisseurServ.findAll().subscribe((data: Fournisseur[]) => {
      this.fournisseurs = data;
    });
  }
  openNew() {
      this.ref = this.dialogService.open(FournisseurAddDialog, {
          header: 'Add a Product',
          width: '50vw',
          contentStyle: { overflow: 'auto' },
          breakpoints: {
              '960px': '75vw',
              '640px': '90vw'
          },
          templates: {
              //footer: Footer
          }
      });
  
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
