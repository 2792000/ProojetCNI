import { Comptes } from './../../Modele/Comptes';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { CompteServiceService } from 'src/app/Service/compte-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajouter-comptes',
  templateUrl: './ajouter-comptes.component.html',
  styleUrls: ['./ajouter-comptes.component.css']
})
export class AjouterComptesComponent implements OnInit {

  addCompte:FormGroup;
  test:any;
  constructor(private router:Router,private fb: FormBuilder,private compteService:CompteServiceService ,private toastr: ToastrService) { }
  ngOnInit(): void {

    this.addCompte = this.fb.group({
      nom:['', [Validators.required]],
      prenom:['', [Validators.required]],
      email: ['', [Validators.required]],
      num_tel: ['', [Validators.required]],
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role:[null, [Validators.required]],
  });
  }

  get f() { return this.addCompte.controls; }
  Sendmail(){

    console.log(this.addCompte.value.email)
    this.compteService.sendLogpassword(this.addCompte.value.email).subscribe(data=>{
      console.log(data)
      this.test=data;
    })
    this.toastr.success("La login et le  mot de passe a été envoyé à l'adresse e-mail",this.addCompte.value.email);


  }

 ajouter(){
   this.recherche()
   if (this.addCompte.invalid){
    this.toastr.error('Erreur!!Verifier votre information');
     return;
   }else {
    if (this.test.length > 0){
      this.toastr.error('Erreur!!Cet email est déjà utilisé');
     }else{
     console.log(this.addCompte.value);
    this.compteService.registre(this.addCompte.value).subscribe(data=>{
      console.log(data);
      if (data['RESPONSE'] == "0"){
        alert("login dispo")
      }else{
        this.router.navigate(["/home/Compte/liste-comptes"]);
        this.toastr.success('Creation de Compte Avec Succès ');
        this.Sendmail();
      }

      console.log(data['RESPONSE']);
     },
     error => console.log(error));

   }
   }

  }
   recherche(){
    this.compteService.recherche(this.addCompte.value.email).subscribe(data=>{
      console.log(data);
      this.test=data;
     },error => console.log(error));
  }

}
