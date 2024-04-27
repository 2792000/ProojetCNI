import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratClientRoutingModule } from './contrat-client-routing.module';
import { CreationContratComponent } from './creation-contrat/creation-contrat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeContratComponent } from './liste-contrat/liste-contrat.component';
import { ModifierContratComponent } from './modifier-contrat/modifier-contrat.component';
import { ListContratRenvComponent } from './list-contrat-renv/list-contrat-renv.component';
import { RenouvelleContratComponent } from './renouvelle-contrat/renouvelle-contrat.component';
import { ImprimeContratComponent } from './imprime-contrat/imprime-contrat.component';
import { TableauBorComponent } from './tableau-bor/tableau-bor.component';
import { SuiviPaymentComponent } from './suivi-payment/suivi-payment.component';
// AddForPaginator
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
//add For Sorted
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AjoutTrancheComponent } from './ajout-tranche/ajout-tranche.component';
import { ArchiveccComponent } from './archivecc/archivecc.component';

@NgModule({
  declarations: [
    CreationContratComponent,
    ListeContratComponent,
    ModifierContratComponent,
    ListContratRenvComponent,
    RenouvelleContratComponent,
    ImprimeContratComponent,
    TableauBorComponent,
    SuiviPaymentComponent,
    AjoutTrancheComponent,
    ArchiveccComponent
  ],
  imports: [
    CommonModule,
    ContratClientRoutingModule,
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
export class ContratClientModule { }
