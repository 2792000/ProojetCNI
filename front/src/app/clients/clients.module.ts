import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { AjouteClientComponent } from './ajoute-client/ajoute-client.component';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModifierClientComponent } from './modifier-client/modifier-client.component';
// AddForPaginator
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
//add For Sorted
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AjouteClientComponent,
    ListeClientComponent,
    ModifierClientComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
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
export class ClientsModule { }
