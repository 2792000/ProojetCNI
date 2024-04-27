import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {DashboardComponentComponent} from "./dashboard-component/dashboard-component.component"
import { CorbeilleComponent } from './corbeille/corbeille.component';
const routes: Routes = [
   {path:'',component:LoginComponent},
   {path:'',component:LoginComponent},
   {path:'home',component:HomeComponent,children:[
   {path:'contrat',loadChildren:()=>import('./contrats/contrats.module').then(mod=>mod.ContratsModule)},
   {path:'Compte',loadChildren:()=>import('./comptes/comptes.module').then(mod=>mod.ComptesModule)},
   {path:'clients',loadChildren:()=>import('./clients/clients.module').then(mod=>mod.ClientsModule)},
   {path:'fournisseur',loadChildren:()=>import('./fournisseur/fournisseur.module').then(mod=>mod.FournisseurModule)},
   {path:'contrat_client',loadChildren:()=>import('./contrat-client/contrat-client.module').then(mod=>mod.ContratClientModule)},
   {path: 'dashboard',      component: DashboardComponentComponent },
   {path: 'corbille',      component: CorbeilleComponent }
  ]




},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
