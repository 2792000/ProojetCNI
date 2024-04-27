import { Fournisseur } from './../Modele/Fournisseurs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FournisseurserviceService {
  PHP_API_SERVER = "http://127.0.0.1";
  urlAP:String;
  constructor(private http:HttpClient) { }
  registre(fournisseur:Fournisseur):Observable<any> {
    console.log(fournisseur);
    return this.http.post<any>(`${this.PHP_API_SERVER}/PFE/fournisseur/ajoutfournisseur.php` , fournisseur);
}

  liste():Observable<any> {

  return this.http.get(`${this.PHP_API_SERVER}/PFE/fournisseur/listFr.php`);
}
recherche(email:any):Observable<any>{
  return this.http.get(`${this.PHP_API_SERVER}/PFE/fournisseur/getfournisseuremail.php?email=`+email);
}
 deletefournisseur(id_fournisseur:any):Observable<any>{

  return this.http.delete(`${this.PHP_API_SERVER}/PFE/fournisseur/supprimer.php?id_fournisseur=`+id_fournisseur);
 }
 modifier():Observable<any>{
  return this.http.delete(`${this.PHP_API_SERVER}/PFE/fournisseur/modifier.php`);

 }
 getById(id_fournisseur:any) :Observable<any> {
  return this.http.get(`${this.PHP_API_SERVER}/PFE/fournisseur/getfournisseur.php?id_fournisseur=`+id_fournisseur);
}
editfournisseur(id:any,
  nom:any,
  fax:any,
  adresse:any,
  num_tel:any,
  email:any,):Observable<any>{
  const bod ={id:id,nom:nom ,
    adresse:adresse,
    email:email,
    fax:fax,
    num_tel:num_tel,
    }
    console.log(bod);
  return this.http.post(`${this.PHP_API_SERVER}/PFE/fournisseur/modifier.php`,bod);
}
}
