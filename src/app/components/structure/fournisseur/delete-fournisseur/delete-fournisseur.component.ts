import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Fournisseur } from '../../../../models/fournisseur.model';
import { FournisseurService } from '../fournisseur.service';

@Component({
  selector: 'app-delete-fournisseur',
  standalone: true,
  imports: [CommonModule, DynamicDialogModule,ButtonModule],
  templateUrl: './delete-fournisseur.component.html',
  styleUrl: './delete-fournisseur.component.scss',
  providers:[FournisseurService]
})
export class DeleteFournisseurComponent implements OnInit{

  private ref :DynamicDialogRef = inject(DynamicDialogRef);
  private config : DynamicDialogConfig = inject(DynamicDialogConfig);
  fournisseurToDelete !: Fournisseur;
  fournisseurService :FournisseurService= inject(FournisseurService);
  ngOnInit(): void {
    if(this.config.data && this.config.data.fournisseurADelete){
      this.fournisseurToDelete =this.config.data.fournisseurADelete;
    }
  }

  deleteFournisseur(){
    console.log("Fourniseur delete ", JSON.stringify(this.fournisseurToDelete))
    this.fournisseurService.delete(this.fournisseurToDelete.id).subscribe(
      ()=>{
        this.ref.close(true);
      }
    )
  }
  closeDialog(){
    this.ref.close();
  }

}
