import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './../Modele/Client';
@Injectable({
  providedIn: 'root'
})
export class DahsbordserviceService {
  PHP_API_SERVER = "http://127.0.0.1";
  urlAP: string;
  constructor(private http:HttpClient) { }
  getlastcontart():Observable<any> {
    return this.http.get<any>(`${this.PHP_API_SERVER}/PFE/Dshborddata/lastcontract.php`);
}

getlastclient():Observable<any> {
  ;
  return this.http.get(`${this.PHP_API_SERVER}/PFE/Dshborddata/lastclient.php`,);
}
getcalcule():Observable<any>{

  return this.http.get(`${this.PHP_API_SERVER}/PFE/Dshborddata/totaldata.php`);
 }


}
