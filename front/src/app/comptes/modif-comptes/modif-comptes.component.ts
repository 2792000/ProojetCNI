import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompteServiceService } from 'src/app/Service/compte-service.service';

@Component({
  selector: 'app-modif-comptes',
  templateUrl: './modif-comptes.component.html',
  styleUrls: ['./modif-comptes.component.css']
})
export class ModifComptesComponent implements OnInit {
  id_utilisateur:any;
  id:any;
  nom:any;
  prenom:any;
  email:any;
  num_tel:any;
  login:any;
  pass_word:any;
  role:any;
  bloc:any;
  userID:any;
  ruser:any;
  test:any;
  constructor(private router:Router,private comptesservice:CompteServiceService,private route:ActivatedRoute,private fb:FormBuilder,private toastr: ToastrService) { }
  Comptes:any=[];
  ngOnInit(): void {
    this.userID=sessionStorage.getItem("userID");
    this.ruser=sessionStorage.getItem("role");
    this.id = this.route.snapshot.params['id'];
    this.comptesservice.getById(this.id).subscribe(data=>{
      console.log(this.id);
     this.Comptes=data[0];
      console.log(data);
      console.log(this.Comptes);

      this.id_utilisateur=this.id;
      this.nom=this.Comptes.nom;
      this.prenom=this.Comptes.prenom;
      this.login=this.Comptes.login;
      this.pass_word=this.Comptes.pass_word
      this.email=this.Comptes.email;
      this.num_tel=this.Comptes.num_tel;
      this.role=this.Comptes.role;
      this.bloc=this.Comptes.bloc
      this.Comptes=this.Comptes[0];

    },error=>{console.log(error)});

  }
  modifier(id:any){
    this.Comptes=[];
    if (this.id) { this.Comptes.id_utilisateur = this.id ;}
    if (this.nom) { this.Comptes.nom = this.nom ;}
    if (this.prenom) { this.Comptes.prenom = this.prenom ;}
    if (this.login) { this.Comptes.login = this.login ;}
    if (this.pass_word) { this.Comptes.pass_word = this.pass_word ;}
    if (this.email) { this.Comptes.email = this.email ;}
    if (this.num_tel) { this.Comptes.num_tel = this.num_tel ;}

    console.log(this.id);
  this.comptesservice.editCompte(this.Comptes.id_utilisateur,this.Comptes.nom,this.Comptes.prenom,this.Comptes.cin,
    this.Comptes.login,this.Comptes.pass_word,this.Comptes.email, this.Comptes.num_tel).subscribe(data=>{
      console.log(data);

      this.Comptes=data;
     },error=>{console.log(error)});
     this.router.navigate(["home/Compte/liste-comptes"]);
     this.toastr.success('La Responsable est Modifier Avec Succès ');
   }
   modifier1(id:any){
    console.log(this.test);
    console.log(this.email);
    this.recherche();
    this.Comptes=[];
    if (this.id) { this.Comptes.id_utilisateur = this.id ;}
    if (this.nom) { this.Comptes.nom = this.nom ;}
    if (this.prenom) { this.Comptes.prenom = this.prenom ;}
    if (this.login) { this.Comptes.login = this.login ;}
    if (this.pass_word) { this.Comptes.pass_word = this.pass_word ;}
    if (this.email) { this.Comptes.email = this.email ;}
    if (this.num_tel) { this.Comptes.num_tel = this.num_tel ;}
    console.log(this.id);
    if (this.test.length > 1){
      this.toastr.error('Erreur!!Cet email est déjà utilisé');
     }else{
  this.comptesservice.editCompte(this.Comptes.id_utilisateur,this.Comptes.nom,this.Comptes.prenom,this.Comptes.cin,
    this.Comptes.login,this.Comptes.pass_word,this.Comptes.email, this.Comptes.num_tel).subscribe(data=>{
      console.log(data);

      this.Comptes=data;
     },error=>{console.log(error)});
     this.router.navigate(["/home/Compte/liste-comptes"]);
     this.toastr.success('Votre information est Modifier Avec Succès ');
   }
  }
   Bloque(id:any){
    this.comptesservice.bloc(id).subscribe(data=>{

        console.log(data);
      },error=>console.log(error));
      this.router.navigate(["/home/Compte/liste-comptes"]);
      this.toastr.success('La Responsable est Bloqué Avec Succès ');
    }
    deBloque(id:any){
      this.comptesservice.debloc(id).subscribe(data=>{

          console.log(data);
        },error=>console.log(error));
        this.router.navigate(["/home/Compte/liste-comptes"]);
        this.toastr.success('La Responsable est débloqué Avec Succès ');
      }
      recherche(){
        this.comptesservice.recherche(this.email).subscribe(data=>{
          console.log(data);
          this.test=data;
         },error => console.log(error));
      }
  }


