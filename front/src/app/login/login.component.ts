import { first } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../Service/loginservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router :Router, private service:LoginserviceService,private toastr: ToastrService) { }
password:any="";
email:any="";
role:any;
profil:any;
log=false;
mail:any;
test:any;
  ngOnInit(): void {

    this.veriflogin();
  }



    verifUser(){
      var username=this.email;
      var pass=this.password
      console.log("username:" +this.email);
      console.log("password:" +this.password);
    this.service.verifUser(username,pass).subscribe(data=>{
      console.log(data);
      console.log(data['nom']);
      if(data['nom']!=null){


        sessionStorage.setItem("userID",data['id_utilisateur']);
        sessionStorage.setItem("userNP",data['nom']+" "+data['prenom']);
        sessionStorage.setItem("role" ,data['role']);
        sessionStorage.setItem("mail" ,data['mail']);
        sessionStorage.setItem("num_tel" ,data['num_tel']);
        sessionStorage.setItem("login" ,data['login']);
        sessionStorage.setItem("bloc" ,data['bloc']);

        this.role = sessionStorage.getItem('role');
        this.profil = sessionStorage.getItem('userNP');
       // console.log("PHOTO: " +this.photo);
       console.log("role:" +this.role);
       if (this.role=="responsable CF")
                    this.router.navigate(["/home/contrat/TableauBor"]);
        if  (this.role=="admin" )
        this.router.navigate(["/home/dashboard"]);
        if  (this.role=="responsable CC" )
        this.router.navigate(["/home/contrat_client/tableauBor"]);
                    this.toastr.success('Bienvenu!!',this.profil);

      }

      else{
        this.toastr.error('Login ou mot de passe erroné!!');

      }
    },error=>{console.log(error,"REPONSE"+'RESPONSE')});

//Le nouveau mot de passe a été envoyé à l'adresse e-mail


    }
    Sendmail(){

      console.log(this.mail)
      this.service.sendforgetpassword(this.mail).subscribe(data=>{
        console.log(data)
        this.test=data;
      })
this.toastr.success("Le nouveau mot de passe a été envoyé à l'adresse e-mail",this.mail);
this.log=false


    }
    veriflogin(){

      //Récupération de l'objet

      var verif = sessionStorage.getItem('userID');
      if (verif){
       this.router.navigate(["/home"]);
        console.log("session userid : "+verif);
      }
      else{
        this.router.navigate(["/"]);
        console.log("session userid : "+verif);
      }
      console.log(verif);

      }
      forgotpass(){
        this.log=true;

      }


      retourlogin(){

        this.log=false;
      }



}
