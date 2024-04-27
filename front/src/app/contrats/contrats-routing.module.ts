import { ModifContratFrnComponent } from './modif-contrat-frn/modif-contrat-frn.component';
import { ModifierContratComponent } from './../contrat-client/modifier-contrat/modifier-contrat.component';
import { ListeContratsComponent } from './liste-contrats/liste-contrats.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationContratComponent } from './creation-contrat/creation-contrat.component';
import { RenouvelleContratComponent } from './renouvelle-contrat/renouvelle-contrat.component';
import { ListContratRenvComponent } from './list-contrat-renv/list-contrat-renv.component';
import { AfficheContratComponent } from './affiche-contrat/affiche-contrat.component';
import { TableauBorComponent } from './tableau-bor/tableau-bor.component';
import { SuiviPaymentComponent } from '../contrat-client/suivi-payment/suivi-payment.component';
import { SuiviPaymentfrnComponent } from './suivi-paymentfrn/suivi-paymentfrn.component';
import { AjoutTranchfrComponent } from './ajout-tranchfr/ajout-tranchfr.component';
import { ArchivecfComponent } from './archivecf/archivecf.component';

const routes: Routes = [
  {path:'ajout',component:CreationContratComponent},
  {path:'listeContrat',component:ListeContratsComponent},
  {path:'mConFrn/:id',component:ModifContratFrnComponent},
  {path:'renouvelContrat/:id',component:RenouvelleContratComponent},
  {path:'listConRenv',component:ListContratRenvComponent},
  {path:'afficheContratFr/:id',component:AfficheContratComponent},
  {path:'TableauBor',component:TableauBorComponent},
  {path:'payment/:id',component:SuiviPaymentfrnComponent},
  {path:'tranchfr/:id',component:AjoutTranchfrComponent},
  {path:'archivecf',component:ArchivecfComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratsRoutingModule { }
