import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComptesRoutingModule } from './comptes-routing.module';
import { AjouterComptesComponent } from './ajouter-comptes/ajouter-comptes.component';
import { ListesComptesComponent } from './listes-comptes/listes-comptes.component';
import { ModifComptesComponent } from './modif-comptes/modif-comptes.component';
import { ProfilComponent } from './profil/profil.component';
// AddForPaginator
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
//add For Sorted
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AjouterComptesComponent,
    ListesComptesComponent,
    ModifComptesComponent,
    ProfilComponent
  ],
  imports: [
    CommonModule,
    ComptesRoutingModule,
    FormsModule,

    ReactiveFormsModule,
         //add For Sorted
         MatSortModule,
         // AddForPaginator
         MatPaginatorModule,
         MatFormFieldModule,
         MatInputModule,
         MatTableModule,
  ]
})
export class ComptesModule { }
