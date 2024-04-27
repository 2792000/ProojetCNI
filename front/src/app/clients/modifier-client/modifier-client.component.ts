import { ClientserviceService } from 'src/app/Service/clientservice.service';
import { FournisseurserviceService } from 'src/app/Service/fournisseurservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modifier-client',
  templateUrl: './modifier-client.component.html',
  styleUrls: ['./modifier-client.component.css']
})
export class ModifierClientComponent implements OnInit {
  id_client:any
  id:any;
  nom:any;
  adresse:any;
  fax:any;
  email:any;
  num_tel:any;
  type:any;
  test:any;
  constructor(private Clientsservice:ClientserviceService,private router:Router,private route:ActivatedRoute,private fb:FormBuilder ,private toastr: ToastrService ) { }
  clients:any=[];
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.Clientsservice.getById(this.id).subscribe(data=>{
      console.log(this.id);
     this.clients=data[0];
      console.log(data);
      console.log(this.clients);

      this.id_client=this.id;
      this.nom=this.clients.nom;
      this.fax=this.clients.fax;
      this.adresse=this.clients.adresse;
      this.num_tel=this.clients.num_tel;
      this.email=this.clients.email;
      this.type=this.clients.type;
      this.clients=this.clients[0];

    },error=>{console.log(error)});

  }
  modifier(id:any){
    this.recherche();
    console.log(this.test);
    console.log(this.email);
    this.clients=[];
    if (this.nom) { this.clients.nom = this.nom ;}
    if (this.id) { this.clients.id = this.id ;}
    if (this.fax) { this.clients.fax = this.fax ;}
    if (this.adresse) { this.clients.adresse = this.adresse ;}
    if (this.num_tel) { this.clients.num_tel = this.num_tel ;}
    if (this.email) { this.clients.email = this.email ;}
    if (this.type) { this.clients.type = this.type ;}
    console.log(this.id);
    if (this.test.length > 1){
      this.toastr.error('Erreur!!Cet email est déjà utilisé');
     }else{
  this.Clientsservice.editClient(this.clients.id,this.clients.nom,this.clients.fax,
     this.clients.adresse, this.clients.num_tel,this.clients.email,this.type).subscribe(data=>{
      console.log(data);
      this.clients=data;
     },error=>{console.log(error)});
     this.router.navigate(["home/clients/liste-client"]);
     this.toastr.success('Les Information du Client < '+this.nom+' > est Modifier Avec Succès ');

    }
   }
   recherche(){
    this.Clientsservice.recherche(this.email).subscribe(data=>{
      console.log(data);
      this.test=data;
     },error => console.log(error));
  }
}
