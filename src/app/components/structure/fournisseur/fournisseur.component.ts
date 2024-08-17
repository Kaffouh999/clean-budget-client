import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { Fournisseur } from '../../../models/fournisseur.model';
import { AddUpdateFournisseurComponent } from './add-update-fournisseur/add-update-fournisseur.component';
import { DeleteFournisseurComponent } from './delete-fournisseur/delete-fournisseur.component';
import { FournisseurService } from './fournisseur.service';

@Component({
  providers: [DialogService],
  selector: 'app-fournisseur',
  standalone: true,
  imports: [ToastModule,ToolbarModule, TableModule, DatePipe,ButtonModule,InputTextModule,DynamicDialogModule,CommonModule],
  templateUrl: './fournisseur.component.html',
  styleUrl: './fournisseur.component.scss',
  providers: [DialogService,MessageService]
})
export class FournisseurComponent implements OnInit{


  ref: DynamicDialogRef | undefined;

  fournisseurs: Fournisseur[] = [];

  messageService:MessageService = inject(MessageService);

  constructor(private fournisseurServ: FournisseurService,private dialogService: DialogService) {}

  ngOnInit(): void {
   this.loadData();
  }
  loadData(){
    this.fournisseurServ.findAll().subscribe((data: Fournisseur[]) => {
      this.fournisseurs = data;
    });
  }
  openNew() {
    let header = 'Add Fournisseur';
    let component:any;
    component = AddUpdateFournisseurComponent;

    this.ref = this.dialogService.open(component, {
      header: header,
      width: '50%',
      closable: true
    });

    this.ref.onClose.subscribe((response: Boolean) => {
      if (response) {
        this.show();
      }
     this.loadData();
    });
  }

  editFournisseur(fournisseur: Fournisseur) {

    let header = 'Modifier Fournisseur';
    let component:any;
    component = AddUpdateFournisseurComponent;
    let data = { fournisseurAModifier: fournisseur };

    this.ref = this.dialogService.open(component, {
      header: header,
      width: '50%',
      closable: true,
      data: data
    });

    this.ref.onClose.subscribe((response:Boolean) => {
      if (response) {
        this.show();
      }
     this.loadData();
    });

  }

  deleteFournisseur(fournisseur: Fournisseur) {
    let header = "Delete Fournisseur";
    let component :any= DeleteFournisseurComponent;
    let data = {fournisseurADelete: fournisseur};

    this.ref = this.dialogService.open(component,{
      header:header,
      width: '50%',
      closable: true,
      data: data
    })
    this.ref.onClose.subscribe((result: Boolean) => {
      if(result){
        this.show();
      }
      this.loadData();
    });
  }


  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
}


 
}
