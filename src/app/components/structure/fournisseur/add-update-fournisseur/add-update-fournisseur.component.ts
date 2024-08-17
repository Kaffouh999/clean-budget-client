import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { Fournisseur } from '../../../../models/fournisseur.model';
import { FournisseurService } from '../fournisseur.service';

@Component({
  selector: 'app-add-update-fournisseur',
  standalone: true,
  imports: [FloatLabelModule,FormsModule,DynamicDialogModule,FormsModule,ReactiveFormsModule,CommonModule,ButtonModule,InputTextModule,InputTextareaModule],
  templateUrl: './add-update-fournisseur.component.html',
  styleUrl: './add-update-fournisseur.component.scss',
  providers:[FournisseurService]
})
export class AddUpdateFournisseurComponent implements OnInit  {

  private ref:DynamicDialogRef = inject(DynamicDialogRef);
  private config: DynamicDialogConfig = inject(DynamicDialogConfig);
  private fb : FormBuilder = inject(FormBuilder)
  private fournisseurService : FournisseurService = inject(FournisseurService);
  fournisseur !: Fournisseur;
  fournisseurInput : Fournisseur={
    id:undefined,
    nom: '',
    email: '',
    telephone: '',
    adresse: '',
    description: ''
  };
  form!: FormGroup;
  
  constructor(
  ){
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(undefined),
      nom: new FormControl('', Validators.required),
      description: new FormControl(''),
      email: new FormControl('', Validators.email),
      telephone: new FormControl(''),
      adresse: new FormControl(''),
    });
    if (this.config.data && this.config.data.fournisseurAModifier) {
      this.fournisseurInput = this.config.data.fournisseurAModifier;
      this.fournisseurService.findById(this.fournisseurInput.id).subscribe(
        (fournisseur : Fournisseur)=>
        {
          this.form.patchValue(fournisseur);
        }
        );

    }
  }

  onSubmit(){
    this.fournisseurInput = this.form.value;
    if(this.fournisseurInput.id){
      this.updateFournisseur();
    }else{
      this.addFournisseur();
    }
   
  }
  addFournisseur(){
    this.fournisseurService.add(this.fournisseurInput).subscribe(
      ()=>{
        this.ref.close(true);
      }
    )
  }

  updateFournisseur(){
    this.fournisseurService.update(this.fournisseurInput).subscribe(
      ()=>{
        this.ref.close(true);
      }
    )
  }

  closeDialog(){
    console.log("close dialog");
    this.ref.close();
  }
}
