import { ModifComptesComponent } from './modif-comptes/modif-comptes.component';
import { ListesComptesComponent } from './listes-comptes/listes-comptes.component';
import { AjouterComptesComponent } from './ajouter-comptes/ajouter-comptes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';


const routes: Routes = [
  {path:'ajoutCom',component:AjouterComptesComponent},
  {path:'liste-comptes',component:ListesComptesComponent},
  {path:'modif-comptes/:id',component:ModifComptesComponent},
  {path:'profil/:id',component:ProfilComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComptesRoutingModule { }
