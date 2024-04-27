import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContratClientserviseService } from 'src/app/Service/contrat-clientservise.service';

@Component({
  selector: 'app-renouvelle-contrat',
  templateUrl: './renouvelle-contrat.component.html',
  styleUrls: ['./renouvelle-contrat.component.css']
})
export class RenouvelleContratComponent implements OnInit {
  id_contratClient:any;
  id:any;
  ref_contrat:any;
  ref_marche:any;
  id_client:any;
  montant:any;
  objet:any;
  duree:any;
  renouvele:any;
  date_debut:any;
  date_fin:any;
  date_de_preavis:any;
  structure_technique:any;
  mise_en_demeure:any;
  piece_joite:any;
  date_de_facturation:any;
  nom:any;
  prenom:any;
  profil:any;
  constructor(private contartclientservice:ContratClientserviseService,private router:Router,private route:ActivatedRoute,private fb:FormBuilder,private toastr: ToastrService) { }
  contratClient:any=[];
  Client:any=[];
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.contartclientservice.getById(this.id).subscribe(data=>{
      console.log(this.id);
     this.contratClient=data[0];
      console.log(data);
      console.log(this.contratClient);
      this.id_contratClient=this.id;
      this.ref_contrat=this.contratClient.ref_contrat;
      this.id_client=this.contratClient.id_client;
      this.ref_marche=this.contratClient.ref_marche;
      this.montant=this.contratClient.montant;
      this.objet=this.contratClient.objet;
      this.duree=this.contratClient.duree;
      this.renouvele=this.contratClient.renouvele;
      this.date_debut=this.contratClient.date_debut;
      this.date_fin=this.contratClient.date_fin;
      this.date_de_preavis=this.contratClient.date_de_preavis;
      this.structure_technique=this.contratClient.structure_technique;
      this.mise_en_demeure=this.contratClient.mise_en_demeure;
      this.piece_joite=this.contratClient.piece_joite;
      this.date_de_facturation=this.contratClient.date_de_facturation;
      this.contratClient=this.contratClient[0];
      this.getClientByid();


    },error=>{console.log(error)});
  }
  modifier(id:any){
    this.contratClient=[];
    if (this.id) { this.contratClient.id_contratClient = this.id ;}
    if (this.duree) { this.contratClient.duree = this.duree ;}
    if (this.renouvele) { this.contratClient.renouvele = this.renouvele ;}
    if (this.date_debut) { this.contratClient.date_debut = this.date_debut ;}
    if (this.date_fin) { this.contratClient.date_fin = this.date_fin ;}
    if (this.date_de_preavis) { this.contratClient.date_de_preavis = this.date_de_preavis ;}
    if (this.date_de_facturation) { this.contratClient.date_de_facturation = this.date_de_facturation ;}

    console.log(this.id);
  this.contartclientservice.RenoContartClient(this.contratClient.id_contratClient,this.contratClient.duree,
     this.contratClient.renouvele,this.contratClient.date_debut,this.contratClient.date_fin,
     this.contratClient.date_de_preavis,this.contratClient.date_de_facturation).subscribe(data=>{console.log(data);

      this.contratClient=data;
     },error=>{console.log(error)});
     this.router.navigate(["/home/contrat_client/listeContrat"]);
     this.toastr.success('Le Contrat de Refirence < '+this.ref_contrat+' > est Renouveler Avec Succès ');
   }
   getClientByid(){
    this.contartclientservice.getByIdCl(this.id_client).subscribe(data=>{
      console.log(data);
     this.nom=data[0].nom;
     this.prenom=data[0].prenom;
     console.log(this.nom);
     console.log(this.prenom);
     this.profil=this.nom+' '+this.prenom
     console.log(this.profil);
    },error=>{console.log(error)});
  }
}
