import { ModifierClientComponent } from './modifier-client/modifier-client.component';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { AjouteClientComponent } from './ajoute-client/ajoute-client.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'ajout-client',component:AjouteClientComponent},
  {path:'liste-client',component:ListeClientComponent},
  {path:'modifierClient/:id',component:ModifierClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
