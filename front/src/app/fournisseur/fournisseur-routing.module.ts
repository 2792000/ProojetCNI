import { AjoutFournisseurComponent } from './ajout-fournisseur/ajout-fournisseur.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeFournisseurComponent } from './liste-fournisseur/liste-fournisseur.component';
import { ModifierFournisseurComponent } from './modifier-fournisseur/modifier-fournisseur.component';

const routes: Routes = [
  {path:'ajout-fournisseur',component:AjoutFournisseurComponent},
  {path:'liste-fournisseur',component:ListeFournisseurComponent},
  {path:'editfour/:id',component:ModifierFournisseurComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FournisseurRoutingModule { }
