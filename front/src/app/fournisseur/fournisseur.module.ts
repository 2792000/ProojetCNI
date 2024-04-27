import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournisseurRoutingModule } from './fournisseur-routing.module';
import { AjoutFournisseurComponent } from './ajout-fournisseur/ajout-fournisseur.component';
import { ListeFournisseurComponent } from './liste-fournisseur/liste-fournisseur.component';
import { ModifierFournisseurComponent } from './modifier-fournisseur/modifier-fournisseur.component';
// AddForPaginator
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
//add For Sorted
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AjoutFournisseurComponent,
    ListeFournisseurComponent,
    ModifierFournisseurComponent
  ],
  imports: [
    CommonModule,
    FournisseurRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    //add For Sorted
    MatSortModule,
    // AddForPaginator
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ]
})
export class FournisseurModule { }
