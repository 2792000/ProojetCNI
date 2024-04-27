import { Client } from './../../Modele/Client';


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CompteServiceService } from 'src/app/Service/compte-service.service';
import { ClientserviceService } from 'src/app/Service/clientservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajoute-client',
  templateUrl: './ajoute-client.component.html',
  styleUrls: ['./ajoute-client.component.css']
})
export class AjouteClientComponent implements OnInit {
client:Client=new Client();
  addClinet:FormGroup;
  nom:any="";
  adresse:any="";
  fax:any="";
  email:any="";
  num_tel:any="";
  type:any="";
  test:any;
  constructor(private router:Router,public fb: FormBuilder,private clientservice:ClientserviceService,private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.addClinet = this.fb.group({
      nom: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      fax:['', [Validators.required]],
      email:['', [Validators.required]],
      num_tel: ['', [Validators.required]],
      type: [null, [Validators.required]],


    })

  }

  get f() { return this.addClinet.controls; }

    ajouter(){
      this.recherche();
      if (this.addClinet.invalid){
        this.toastr.error("Erreur!!Verifier votre coordonnées");
        return;
      }else {
        if (this.test.length > 0){
          this.toastr.error('Erreur!!Cet email est déjà utilisé');
         }else{
        console.log(this.addClinet.value);
       this.clientservice.registre(this.addClinet.value).subscribe(data=>{
         console.log(data);


         if (data['RESPONSE'] == "0"){
           alert("login dispo")

         }else{this.router.navigate(["home/clients/liste-client"]);
         this.toastr.success("Le client "+this.nom+" est ajouté avec succès ");
         }

         console.log(data['RESPONSE']);
        },
        error => console.log(error));
      }
      }
      }
      recherche(){
        this.clientservice.recherche(this.addClinet.value.email).subscribe(data=>{
          console.log(data);
          this.test=data;
         },error => console.log(error));
      }

}

