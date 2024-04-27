import { ModifierContratComponent } from './modifier-contrat/modifier-contrat.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationContratComponent } from './creation-contrat/creation-contrat.component';
import { ListeContratComponent } from './liste-contrat/liste-contrat.component';
import { ListContratRenvComponent } from './list-contrat-renv/list-contrat-renv.component';
import { RenouvelleContratComponent } from './renouvelle-contrat/renouvelle-contrat.component';

import { ImprimeContratComponent } from './imprime-contrat/imprime-contrat.component';
import { TableauBorComponent } from './tableau-bor/tableau-bor.component';
import { SuiviPaymentComponent } from './suivi-payment/suivi-payment.component';
import { AjoutTrancheComponent } from './ajout-tranche/ajout-tranche.component';
import { ArchiveccComponent } from './archivecc/archivecc.component';


const routes: Routes = [
  {path:'creationContrat',component:CreationContratComponent},
  {path:'listeContrat',component:ListeContratComponent},
  {path:'modifContrat/:id',component:ModifierContratComponent},
  {path:'listConRenv',component:ListContratRenvComponent},
  {path:'renouvelContrat/:id',component:RenouvelleContratComponent},
  {path:'imprimer/:id',component:ImprimeContratComponent},
  {path:'tableauBor',component:TableauBorComponent},
  {path:'suivi/:id',component:SuiviPaymentComponent},
  {path:'tranche/:id',component:AjoutTrancheComponent},
  {path:'archivecc',component:ArchiveccComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratClientRoutingModule { }
