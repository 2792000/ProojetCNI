import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContratClientModule } from '../contrat-client/contrat-client.module';

@Injectable({
  providedIn: 'root'
})
export class ContratClientserviseService  {
  PHP_API_SERVER = "http://127.0.0.1";
  urlAP:String;
  constructor(private http:HttpClient) { }
  registre(contrat:ContratClientModule):Observable<any> {
    console.log(contrat);
    return this.http.post<any>(`${this.PHP_API_SERVER}/PFE/contrat/ajoutContratClient.php` , contrat);
}
registrepy(contrat:ContratClientModule,id:any):Observable<any> {
  console.log(contrat);
  return this.http.post<any>(`${this.PHP_API_SERVER}/PFE/contrat/ajouterTrancheCC.php?id_contratClient=`+id , contrat);
}
liste():Observable<any> {

  return this.http.get(`${this.PHP_API_SERVER}/PFE/contrat/listContratCl.php`);
}
listearchiveCC():Observable<any> {

  return this.http.get(`${this.PHP_API_SERVER}/PFE/contrat/listarchiveContratCl.php`);
}
listetranche(id_contratClient:any):Observable<any> {

  return this.http.get(`${this.PHP_API_SERVER}/PFE/contrat/listPyCC.php?id_contratClient=`+id_contratClient);
}
listeCl():Observable<any> {

  return this.http.get(`${this.PHP_API_SERVER}/PFE/client/listClient.php`);
}
listeCR():Observable<any>{
  return this.http.get(`${this.PHP_API_SERVER}/PFE/contrat/listerounvCC.php`);
}
getByIdCl(id_client:any):Observable<any> {

  return this.http.get(`${this.PHP_API_SERVER}/PFE/client/getClient.php?id_client=`+id_client);
}
deleteContrat(id_contratClient:any):Observable<any>{
  return this.http.delete(`${this.PHP_API_SERVER}/PFE/contrat/supprimerCC.php?id_contratClient=`+id_contratClient);
 }
 deleteTranche(id_payment:any):Observable<any>{
  return this.http.delete(`${this.PHP_API_SERVER}/PFE/contrat/supprimerTC.php?id_payment=`+id_payment);
 }
 modifier():Observable<any>{
  return this.http.delete(`${this.PHP_API_SERVER}/PFE/contrat/modifierContartClient.php`);

 }
 sommepy(id_contratClient:any):Observable<any> {
  return this.http.get(`${this.PHP_API_SERVER}/PFE/contrat/sommeTranche.php?id_contratClient=`+id_contratClient);
}
 getById(id_contratClient:any) :Observable<any> {
  return this.http.get(`${this.PHP_API_SERVER}/PFE/contrat/getContratClient.php?id_contratClient=`+id_contratClient);
}
taw():Observable<any> {
  return this.http.get(`${this.PHP_API_SERVER}/PFE/contrat/taw.php`);
}
RenoContartClient(id_contratClient:any,
  duree:any,
  renouvele:any,
  date_debut:any,
  date_fin:any,
  date_de_preavis:any,
  date_de_facturation:any):Observable<any>{
    const bod ={id_contratClient:id_contratClient,
    duree:duree,
    renouvele:renouvele,
    date_debut:date_debut,
    date_fin:date_fin,
    date_de_preavis:date_de_preavis,
    date_de_facturation:date_de_facturation,
    }
    console.log(bod);
  return this.http.post(`${this.PHP_API_SERVER}/PFE/contrat/renvContartClient.php`,bod);
}
editContartClient(id_contratClient:any,
  ref_contrat:any,

  id_client:any,
  montant:any,
  objet:any,
  duree:any,
  renouvele:any,
  date_debut:any,
  date_fin:any,
  structure_technique:any,
  piece_jointe:any,
  date_de_facturation:any):Observable<any>{
  const bod ={id_contratClient:id_contratClient,
    ref_contrat:ref_contrat,

    id_client:id_client,
    montant:montant,
    objet:objet,
    duree:duree,
    renouvele:renouvele,
    date_debut:date_debut,
    date_fin:date_fin,
    structure_technique:structure_technique,
    piece_jointe:piece_jointe,
    date_de_facturation:date_de_facturation,
    }
    console.log(bod);
  return this.http.post(`${this.PHP_API_SERVER}/PFE/contrat/modifierContartClient.php`,bod);
}
archiveCC():Observable<any>{
  return this.http.get(`${this.PHP_API_SERVER}/PFE/contrat/archiveCC.php`);
}
recherche(ref_contrat:any):Observable<any>{
  return this.http.get(`${this.PHP_API_SERVER}/PFE/contrat/getContratCRef.php?ref_contrat=`+ref_contrat);
}
}
