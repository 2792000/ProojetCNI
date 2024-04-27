import { FournisseurserviceService } from './../../Service/fournisseurservice.service';
import { Fournisseur } from './../../Modele/Fournisseurs';


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ajout-fournisseur',
  templateUrl: './ajout-fournisseur.component.html',
  styleUrls: ['./ajout-fournisseur.component.css']
})
export class AjoutFournisseurComponent implements OnInit {
  addFornisseur:FormGroup;
  nom:any="";
  adresse:any="";
  fax:any="";
  email:any="";
  num_tel:any="";
  test:any;
  constructor(private router:Router,private fb: FormBuilder,private Fournisseurservice:FournisseurserviceService ,private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.addFornisseur = this.fb.group({
      nom: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      fax:['', [Validators.required]],
      email:['', [Validators.required]],
      num_tel: ['', [Validators.required]],

    })
  }
  get f() { return this.addFornisseur.controls; }
  ajouter(){
    this.recherche();
    if (this.addFornisseur.invalid){
      this.toastr.error("Erreur!!Verifier votre coordonnées");
      return;
    }else {
      if (this.test.length > 0){
        this.toastr.error('Erreur!!Cet email est déjà utilisé');
       }else{
      console.log(this.addFornisseur.value);
     this.Fournisseurservice.registre(this.addFornisseur.value).subscribe(data=>{
       console.log(data);
       if (data['RESPONSE'] == "0"){
         alert("login dispo")
       }else{this.addFornisseur.reset();
        this.router.navigate(["home/fournisseur/liste-fournisseur"]);
        this.toastr.success('Le Fournisseur est Ajouté Avec Succès ');

       }

       console.log(data['RESPONSE']);
      },
      error => console.log(error));
    }
    }
    }
    recherche(){
      this.Fournisseurservice.recherche(this.addFornisseur.value.email).subscribe(data=>{
        console.log(data);
        this.test=data;
       },error => console.log(error));
    }
}
