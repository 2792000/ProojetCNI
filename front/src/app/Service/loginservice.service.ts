import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {


  urlService="http://127.0.0.1/PFE/login/";
  constructor(private http:HttpClient) { }

  verifUser(email: any,password: any):Observable<any> {
    console.log(email);
    console.log(password);
    let body={email:email,password:password};
    console.log(body)
    console.log(this.urlService+"login.php");
    return this.http.post(this.urlService+"login.php",body);


  }

  sendforgetpassword(email : String) :Observable<any>{
    console.log('emm', email)
    return this.http.post(this.urlService+"resetpassword.php" , {email:email})
  }



}
