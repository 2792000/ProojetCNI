import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  PHP_API_SERVER = "http://127.0.0.1";
  urlAP:String;
  constructor(private http:HttpClient) { }
  listeCR():Observable<any>{
    return this.http.get(`${this.PHP_API_SERVER}/PFE/contrat/listerounvCC.php`);
  }
  listeCRF():Observable<any>{
    return this.http.get(`${this.PHP_API_SERVER}/PFE/contrat/listerounv.php`);
  }
  archiveCC():Observable<any>{
    return this.http.get(`${this.PHP_API_SERVER}/PFE/contrat/archiveCC.php`);
  }
  archiveCF():Observable<any>{
    return this.http.get(`${this.PHP_API_SERVER}/PFE/contrat/archiveCF.php`);
  }
  listesupClient():Observable<any> {

    return this.http.get(`${this.PHP_API_SERVER}/PFE/Corbeille/listClient.php`);
  }
}
