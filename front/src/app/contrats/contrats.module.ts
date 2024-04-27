import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratsRoutingModule } from './contrats-routing.module';
import { CreationContratComponent } from './creation-contrat/creation-contrat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeContratsComponent } from './liste-contrats/liste-contrats.component';
import { ModifContratFrnComponent } from './modif-contrat-frn/modif-contrat-frn.component';
import { AfficheContratComponent } from './affiche-contrat/affiche-contrat.component';
import { RenouvelleContratComponent } from './renouvelle-contrat/renouvelle-contrat.component';
import { ListContratRenvComponent } from './list-contrat-renv/list-contrat-renv.component';
import { TableauBorComponent } from './tableau-bor/tableau-bor.component';
// AddForPaginator
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
//add For Sorted
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AjoutTranchfrComponent } from './ajout-tranchfr/ajout-tranchfr.component';
import { SuiviPaymentfrnComponent } from './suivi-paymentfrn/suivi-paymentfrn.component';
import { ArchivecfComponent } from './archivecf/archivecf.component';



@NgModule({
  declarations: [
    CreationContratComponent,
    ListeContratsComponent,
    ModifContratFrnComponent,
    AfficheContratComponent,
    RenouvelleContratComponent,
    ListContratRenvComponent,
    TableauBorComponent,
    SuiviPaymentfrnComponent,
    AjoutTranchfrComponent,
    ArchivecfComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ContratsRoutingModule,
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
export class ContratsModule { }
