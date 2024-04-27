import { Comptes } from './../Modele/Comptes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteServiceService {
  PHP_API_SERVER = "http://127.0.0.1";
  urlService="http://127.0.0.1/PFE/compte/"
  urlAP: string;
  constructor(private http:HttpClient) { }

  registre(compte:Comptes):Observable<any> {
    console.log(compte);
    return this.http.post<any>(`${this.PHP_API_SERVER}/PFE/compte/ajoututilisateur.php` , compte);
}
liste():Observable<any> {

  return this.http.get(`${this.PHP_API_SERVER}/PFE/compte/listeUtilisateur.php`,);
}
bloc(id: any):Observable<any> {
  return this.http.delete(`${this.PHP_API_SERVER}/PFE/compte/bloc.php?id=`+id);

}
debloc(id: any):Observable<any> {
  return this.http.delete(`${this.PHP_API_SERVER}/PFE/compte/debloc.php?id=`+id);

}
 deletecompte(id_utilisateur: any):Observable<any>{

  return this.http.delete(`${this.PHP_API_SERVER}/PFE/compte/supprimer.php?id_utilisateur=`+id_utilisateur);
 }
 modifier():Observable<any>{
  return this.http.delete(`${this.PHP_API_SERVER}/PFE/client/modifier.php`);

 }
 bloquesuti(id_utilisateur:any):Observable<any> {
  return this.http.get(`${this.PHP_API_SERVER}/PFE/compte/bloc.php?id_utilisateur=`+id_utilisateur);
 }
 getById(id_utilisateur:any) :Observable<any> {
  return this.http.get(`${this.PHP_API_SERVER}/PFE/compte/getcompte.php?id_utilisateur=`+id_utilisateur);
}
recherche(email:any):Observable<any>{
  return this.http.get(`${this.PHP_API_SERVER}/PFE/compte/getcompteemail.php?email=`+email);
}
  editCompte(id_utilisateur:any,
    nom:any,
    prenom:any,
    cin:any,
    login:any,
    pass_word:any,
    email:any,
    num_tel:any
    ):Observable<any>{
    const bod ={
      id_utilisateur:id_utilisateur,
      nom:nom,
      prenom:prenom,
      cin:cin,
      login:login,
      pass_word:pass_word,
      email:email,
      num_tel:num_tel,
      }
      console.log(bod);
    return this.http.post(`${this.PHP_API_SERVER}/PFE/compte/modifier.php`,bod);
  }
  sendLogpassword(email : String) :Observable<any>{
    console.log('emm', email)
    return this.http.post(this.urlService+"envoiLPmail.php" , {email:email})
  }

}
