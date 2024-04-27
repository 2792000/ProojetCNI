import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompteServiceService } from 'src/app/Service/compte-service.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  id:any;
  /*user:any;
  role:any;
  tele:any;
  mail:any;
  login:any;
  password:any;*/
  id_utilisateur:any;
  nom:any;
  prenom:any;
  login:any;
  pass_word:any;
  email:any;
  num_tel:any;
  role:any;
  constructor(private router:Router,private comptesservice:CompteServiceService,private route:ActivatedRoute,private fb:FormBuilder,private toastr: ToastrService) { }

  Comptes:any=[];
  ngOnInit(){
    this.role=sessionStorage.getItem("role");
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
      this.Comptes=this.Comptes[0];

    },error=>{console.log(error)});
    /*this.user=sessionStorage.getItem("userNP");*/

    /*this.tele=sessionStorage.getItem("num_tel");dashboard
    this.mail=sessionStorage.getItem("mail");
    this.login=sessionStorage.getItem("login");
    this.id =this.id=sessionStorage.getItem("userID");*/

  }



}
