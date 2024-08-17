import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FournisseurService } from './fournisseur.service';
import { Fournisseur } from '../../../models/fournisseur.model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  providers: [DialogService, MessageService, FournisseurService],
  standalone: true,
  imports: [TableModule, ButtonModule, ReactiveFormsModule, InputTextModule],
  template: `
    <br />
    <form [formGroup]="fournisseurForm" class="p-fluid grid">
      <div class="field col-6">
        <span class="p-float-label">
          <input
            type="text"
            pInputText
            id="nom"
            formControlName="nom"
            required
            autofocus
          />
          <label for="nom">Name</label>
        </span>
      </div>
      <div class="field col-6">
        <span class="p-float-label">
          <input
            type="text"
            pInputText
            id="description"
            formControlName="description"
          />
          <label for="description">Description</label>
        </span>
      </div>
      <div class="field col-6">
        <span class="p-float-label">
          <input type="email" pInputText id="email" formControlName="email" />
          <label for="email">Email</label>
        </span>
      </div>
      <div class="field col-6">
        <span class="p-float-label">
          <input
            type="tel"
            pInputText
            id="telephone"
            formControlName="telephone"
          />
          <label for="telephone">Telephone</label>
        </span>
      </div>
      <div class="field col-6">
        <span class="p-float-label">
          <input
            type="text"
            pInputText
            id="adresse"
            formControlName="adresse"
          />
          <label for="adresse">Address</label>
        </span>
      </div>
    </form>

    <div class="dialog-footer">
      <button
        pButton
        pRipple
        label="Cancel"
        icon="pi pi-times"
        class="p-button-text"
        (click)="closeDialog()"
      ></button>
      <button
        pButton
        pRipple
        label="Save"
        icon="pi pi-check"
        class="p-button-text"
        [disabled]="fournisseurForm.invalid"
        (click)="saveFournisseur()"
      ></button>
    </div>
  `,
})
export class FournisseurAddDialog implements OnInit {
  fournisseur: Fournisseur = {
      nom: ''
  };
  fournisseurForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private fournisseurServ: FournisseurService,
    private dialogService: DialogService,
    private ref: DynamicDialogRef
  ) {
    this.fournisseurForm = this.formBuilder.group({
      nom: '',
      description: '',
      email: '',
      telephone: '',
      adresse: '',
      supprime: false,
    });
  }

  fillFournisseur(): void {
    this.fournisseur = this.fournisseurForm.value;
  }
  ngOnInit() {}

  closeDialog() {
    this.ref.close();
  }

  saveFournisseur() {
    if (this.fournisseurForm.valid) {
      this.fillFournisseur();
      // Here you would typically call a service method to save the fournisseur
      this.fournisseurServ.add(this.fournisseur).subscribe((data) => {
        console.log(data);
      });
      this.closeDialog();
    }
  }

  showInfo() {
    /* this.dialogService.open(InfoDemo, {
            header: 'Information',
            modal: true,
            dismissableMask: true,
            data: {
                totalProducts: this.products ? this.products.length : 0
            }
        }); */
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'dark';
    }
  }
}
