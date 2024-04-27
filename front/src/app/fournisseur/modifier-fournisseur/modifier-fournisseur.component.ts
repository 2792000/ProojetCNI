import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Fournisseur } from 'src/app/Modele/Fournisseurs';
import { FournisseurserviceService } from 'src/app/Service/fournisseurservice.service';

@Component({
  selector: 'app-modifier-fournisseur',
  templateUrl: './modifier-fournisseur.component.html',
  styleUrls: ['./modifier-fournisseur.component.css']
})
export class ModifierFournisseurComponent implements OnInit {
  id_fournisseur:any
  id:any;
  nom:any;
  adresse:any;
  fax:any;
  email:any;
  num_tel:any;
  test:any;

  constructor(private Fournisseurservice:FournisseurserviceService,private router:Router,private route:ActivatedRoute,private fb:FormBuilder ,private toastr: ToastrService) { }
  fourniseur:any=[];

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.Fournisseurservice.getById(this.id).subscribe(data=>{
      console.log(this.id);
     this.fourniseur=data[0];
      console.log(data);
      console.log(this.fourniseur);
      this.id_fournisseur=this.id;
      this.nom=this.fourniseur.nom;
      this.fax=this.fourniseur.fax;
      this.adresse=this.fourniseur.adresse;
      this.num_tel=this.fourniseur.num_tel;
      this.email=this.fourniseur.email;
      this.fourniseur=this.fourniseur[0];

    },error=>{console.log(error)});



    // this.affiche();
  }

 modifier(id:any){
  console.log(this.test);
  console.log(this.email);
  this.recherche();
  console.log(this.email);
  console.log(this.test);
  this.fourniseur=[];
  if (this.nom) { this.fourniseur.nom = this.nom ;}
  if (this.id) { this.fourniseur.id = this.id ;}
  if (this.fax) { this.fourniseur.fax = this.fax ;}
  if (this.adresse) { this.fourniseur.adresse = this.adresse ;}
  if (this.num_tel) { this.fourniseur.num_tel = this.num_tel ;}
  if (this.email) { this.fourniseur.email = this.email ;}
  console.log(this.id);
  if (this.test.length >1){
    this.toastr.error('Erreur!!Cet email est déjà utilisé');
   }else{
this.Fournisseurservice.editfournisseur(this.fourniseur.id,this.fourniseur.nom,this.fourniseur.fax,
   this.fourniseur.adresse, this.fourniseur.num_tel,this.fourniseur.email).subscribe(data=>{
    console.log(data);

    this.fourniseur=data;
   },error=>{console.log(error)});
   this.router.navigate(["home/fournisseur/liste-fournisseur"]);
   this.toastr.success('Les Information du Client < '+this.nom+'> est Modifier Avec Succès ');
  }
 }
 recherche(){
  console.log(this.email);

  this.Fournisseurservice.recherche(this.email).subscribe(data=>{
    console.log(data);
    this.test=data;
   },error => console.log(error));
}
}




