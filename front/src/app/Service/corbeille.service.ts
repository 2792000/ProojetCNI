import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorbeilleService {
  PHP_API_SERVER = "http://127.0.0.1";
  urlAP:String;
  constructor(private http:HttpClient) { }
  listesupFrn():Observable<any> {
    return this.http.get(`${this.PHP_API_SERVER}/PFE/corbeille/listFrn.php`);
  }
  listesupClient():Observable<any> {

    return this.http.get(`${this.PHP_API_SERVER}/PFE/corbeille/listClient.php`);
  }
  listesupCC():Observable<any> {

    return this.http.get(`${this.PHP_API_SERVER}/PFE/corbeille/listeCC.php`);
  }
  listesupCF():Observable<any> {

    return this.http.get(`${this.PHP_API_SERVER}/PFE/corbeille/listeCF.php`);
  }
  restaurer(id_client:any):Observable<any>{
    return this.http.delete(`${this.PHP_API_SERVER}/PFE/corbeille/modifierC.php?id_client=`+id_client);
  }
  restaurerF(id_fournisseur:any):Observable<any>{
    return this.http.delete(`${this.PHP_API_SERVER}/PFE/corbeille/modifierF.php?id_fournisseur=`+id_fournisseur);
  }
  restaurerCF(id_contratFrn:any):Observable<any>{
    return this.http.delete(`${this.PHP_API_SERVER}/PFE/corbeille/modifierCF.php?id_contratFrn=`+id_contratFrn);
  }
  restaurerCC(id_contratClient:any):Observable<any>{
    return this.http.delete(`${this.PHP_API_SERVER}/PFE/corbeille/modifierCC.php?id_contratClient=`+id_contratClient);
  }
}
