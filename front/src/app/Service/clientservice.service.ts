import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './../Modele/Client';
@Injectable({
  providedIn: 'root'
})
export class ClientserviceService {
  PHP_API_SERVER = "http://127.0.0.1";
  urlAP: string;
  constructor(private http:HttpClient) { }
  registre(client:Client):Observable<any> {
    console.log(client);
    return this.http.post<any>(`${this.PHP_API_SERVER}/PFE/client/ajoutclient.php` , client);
}

liste():Observable<any> {
  ;
  return this.http.get(`${this.PHP_API_SERVER}/PFE/client/listClient.php`,);
}
deleteClient(idcl:any):Observable<any>{

  return this.http.delete(`${this.PHP_API_SERVER}/PFE/client/supprimer.php?idcl=`+idcl);
 }
 modifier():Observable<any>{
  return this.http.delete(`${this.PHP_API_SERVER}/PFE/client/modifier.php`);

 }
 recherche(email:any):Observable<any>{
  return this.http.get(`${this.PHP_API_SERVER}/PFE/client/getclientemail.php?email=`+email);
}
 getById(id_client:any) :Observable<any> {
  return this.http.get(`${this.PHP_API_SERVER}/PFE/client/getclient.php?id_client=`+id_client);}
  editClient(id:any,
    nom:any,
    fax:any,
    adresse:any,
    num_tel:any,
    email:any,
    type:any,
    ):Observable<any>{
    const bod ={id:id,nom:nom ,
      fax:fax,
      adresse:adresse,
      num_tel:num_tel,
      email:email,
      type:type,
      }
      console.log(bod);
    return this.http.post(`${this.PHP_API_SERVER}/PFE/client/modifier.php`,bod);
  }
rechercheCli(mots:any){
  return this.http.get(`${this.PHP_API_SERVER}/PFE/client/recherche.php?mots=`+mots);
}
}
