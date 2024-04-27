import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContratsModule } from '../contrats/contrats.module';
import { Contrats } from '../Modele/Contrats';

@Injectable({
  providedIn: 'root'
})
export class ContratserviseService {
  PHP_API_SERVER = "http://127.0.0.1";
  urlAP:String;
  constructor(private http:HttpClient) { }
  getById(id_contratFrn:any) :Observable<any> {
    return this.http.get(`${this.PHP_API_SERVER}/PFE/contrat/getContratFrn.php?id_contratFrn=`+id_contratFrn);
  }
  recherche(ref_contrat:any):Observable<any>{
    return this.http.get(`${this.PHP_API_SERVER}/PFE/contrat/getContratFrnRef.php?ref_contrat=`+ref_contrat);
  }
  getFrnById(id_fournisseur:any):Observable<any>{
    return this.http.get(`${this.PHP_API_SERVER}/PFE/fournisseur/getfournisseur.php?id_fournisseur=`+id_fournisseur);
  }

  registre(contrat:ContratsModule):Observable<any> {
    console.log(contrat);
    return this.http.post<any>(`${this.PHP_API_SERVER}/PFE/contrat/ajoutContrat.php` , contrat);
}
registrepy(contrat:ContratsModule,id:any):Observable<any> {
  console.log(contrat);
  return this.http.post<any>(`${this.PHP_API_SERVER}/PFE/contrat/ajouterTrancheCF.php?id_contratFrn=`+id , contrat);
}
liste():Observable<any> {

  return this.http.get(`${this.PHP_API_SERVER}/PFE/contrat/listContratfr.php`);
}
taw():Observable<any> {
  return this.http.get(`${this.PHP_API_SERVER}/PFE/contrat/taw.php`);
}
listefr():Observable<any> {

  return this.http.get(`${this.PHP_API_SERVER}/PFE/fournisseur/listFr.php`);
}
listeCR():Observable<any>{
  return this.http.get(`${this.PHP_API_SERVER}/PFE/contrat/listerounv.php`);
}
listetranche(id_contratFrn:any):Observable<any> {

  return this.http.get(`${this.PHP_API_SERVER}/PFE/contrat/listPyCF.php?id_contratFrn=`+id_contratFrn);
}
listearchiveCF():Observable<any> {

  return this.http.get(`${this.PHP_API_SERVER}/PFE/contrat/listarchiveContratF.php`);
}
deleteContratFr(id_contratFrn:any):Observable<any>{

  return this.http.delete(`${this.PHP_API_SERVER}/PFE/contrat/supprimerCF.php?id_contratFrn=`+id_contratFrn);
 }
 deleteTranche(id_payment:any):Observable<any>{

  return this.http.delete(`${this.PHP_API_SERVER}/PFE/contrat/supprimerTF.php?id_payment=`+id_payment);
 }
 editContartFrn(id_contratFrn:any,
  ref_contrat:any,
  ref_marche:any,
  id_fournisseur:any,
  montant:any,
  objet:any,
  duree:any,
  renouvele:any,
  date_debut:any,
  date_fin:any,
  date_de_preavis:any,
  structure_technique:any,
  mise_en_demeure:any,
  piece_joite:any,
  date_de_facturation:any):Observable<any>{
  const bod ={id_contratFrn:id_contratFrn,
    ref_contrat:ref_contrat,
    ref_marche:ref_marche,
    id_fournisseur:id_fournisseur,
    montant:montant,
    objet:objet,
    duree:duree,
    renouvele:renouvele,
    date_debut:date_debut,
    date_fin:date_fin,
    date_de_preavis:date_de_preavis,
    structure_technique:structure_technique,
    mise_en_demeure:mise_en_demeure,
    piece_joite:piece_joite,
    date_de_facturation:date_de_facturation,}
    console.log(bod);
  return this.http.post(`${this.PHP_API_SERVER}/PFE/contrat/modifierContartFrn.php`,bod);
}
RnvContartFrn(id_contratFrn:any,
  duree:any,
  renouvele:any,
  date_debut:any,
  date_fin:any,
  date_de_preavis:any,
  date_de_facturation:any):Observable<any>{
    const bod ={id_contratFrn:id_contratFrn,
    duree:duree,
    renouvele:renouvele,
    date_debut:date_debut,
    date_fin:date_fin,
    date_de_preavis:date_de_preavis,
    date_de_facturation:date_de_facturation,
    }
    console.log(bod);
  return this.http.post(`${this.PHP_API_SERVER}/PFE/contrat/renvContartFrn.php`,bod);
}
getfournisseur(id_fournisseur:any):Observable<any>{

    return this.http.get(`${this.PHP_API_SERVER}/PFE/contrat/getfournisseur.php?id_fournisseur=`+id_fournisseur);

}
upload(file:any):Observable<any> {
  console.log(file)
    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append("file", file, file.name);

    // Make http post request over api
    // with formData as req
    return this.http.post(`${this.PHP_API_SERVER}/PFE/contrat/uploadimageCF.php`, formData)
  }

}
