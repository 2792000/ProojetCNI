import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContratserviseService } from 'src/app/Service/contratservise.service';

@Component({
  selector: 'app-renouvelle-contrat',
  templateUrl: './renouvelle-contrat.component.html',
  styleUrls: ['./renouvelle-contrat.component.css']
})
export class RenouvelleContratComponent implements OnInit {
  id_contratFrn:any;
  id:any;
  ref_contrat:any;
  ref_marche:any;
  id_fournisseur:any;
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
  nom:any
  prenom:any
  profil:any
  constructor(private contratsservice:ContratserviseService,private router:Router,private route:ActivatedRoute,private fb:FormBuilder,private toastr: ToastrService) { }
  contratFournisseur:any=[];
  Fournisseur:any=[];
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.contratsservice.getById(this.id).subscribe(data=>{
      console.log(this.id);
     this.contratFournisseur=data[0];
      console.log(data);
      console.log(this.contratFournisseur);
      this.id_contratFrn=this.id;
      this.ref_contrat=this.contratFournisseur.ref_contrat;
      this.id_fournisseur=this.contratFournisseur.id_fournisseur;
      this.ref_marche=this.contratFournisseur.ref_marche;
      this.montant=this.contratFournisseur.montant;
      this.objet=this.contratFournisseur.objet;
      this.duree=this.contratFournisseur.duree;
      this.renouvele=this.contratFournisseur.renouvele;
      this.date_debut=this.contratFournisseur.date_debut;
      this.date_fin=this.contratFournisseur.date_fin;
      this.date_de_preavis=this.contratFournisseur.date_de_preavis;
      this.structure_technique=this.contratFournisseur.structure_technique;
      this.mise_en_demeure=this.contratFournisseur.mise_en_demeure;
      this.piece_joite=this.contratFournisseur.piece_joite;
      this.date_de_facturation=this.contratFournisseur.date_de_facturation;
      this.getfournisseurByid();
      this.contratFournisseur=this.contratFournisseur[0];


    },error=>{console.log(error)});

  }
  modifier(id:any){
    this.contratFournisseur=[];
    if (this.id) { this.contratFournisseur.id_contratFrn = this.id ;}
    if (this.duree) { this.contratFournisseur.duree = this.duree ;}
    if (this.renouvele) { this.contratFournisseur.renouvele = this.renouvele ;}
    if (this.date_debut) { this.contratFournisseur.date_debut = this.date_debut ;}
    if (this.date_fin) { this.contratFournisseur.date_fin = this.date_fin ;}
    if (this.date_de_preavis) { this.contratFournisseur.date_de_preavis = this.date_de_preavis ;}
    if (this.date_de_facturation) { this.contratFournisseur.date_de_facturation = this.date_de_facturation ;}

    console.log(this.id);
  this.contratsservice.RnvContartFrn(this.contratFournisseur.id_contratFrn,this.contratFournisseur.duree,
    this.contratFournisseur.renouvele,this.contratFournisseur.date_debut,this.contratFournisseur.date_fin,
    this.contratFournisseur.date_de_preavis,this.contratFournisseur.date_de_facturation).subscribe(data=>{console.log(data);

      this.contratFournisseur=data;
     },error=>{console.log(error)});
     this.router.navigate(["/home/contrat/TableauBor"]);
      this.toastr.success('Le Contrat de Refirence < '+this.ref_contrat+' > est Renouveler Avec Succès ');



   }
   getfournisseurByid(){
    this.contratsservice.getfournisseur(this.id_fournisseur).subscribe(data=>{
      console.log(data);
     this.nom=data[0].nom;
     console.log(this.nom);
     this.profil=this.nom
     console.log(this.profil);
    },error=>{console.log(error)});
  }
}
