import { Fournisseur } from 'src/app/Modele/Fournisseurs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContratserviseService } from 'src/app/Service/contratservise.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modif-contrat-frn',
  templateUrl: './modif-contrat-frn.component.html',
  styleUrls: ['./modif-contrat-frn.component.css']
})
export class ModifContratFrnComponent implements OnInit {
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
  nom:any;
  prenom:any;
  profil:any;
  selectedFile: File;
  photo: string;
  urlService="http://127.0.0.1/PFE/contrat/";
  constructor(private http:HttpClient,private contratsservice:ContratserviseService,private router:Router,private route:ActivatedRoute,private fb:FormBuilder,private toastr: ToastrService) { }
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
      this.contratFournisseur=this.contratFournisseur[0];
      this.getfournisseurByid();

    },error=>{console.log(error)});


  }
  modifier(id:any){
    this.contratFournisseur=[];
    if (this.id) { this.contratFournisseur.id_contratFrn = this.id ;}
    if (this.ref_contrat) { this.contratFournisseur.ref_contrat = this.ref_contrat ;}
    if (this.id_fournisseur) { this.contratFournisseur.id_fournisseur = this.id_fournisseur ;}
    if (this.ref_marche) { this.contratFournisseur.ref_marche = this.ref_marche ;}
    if (this.montant) { this.contratFournisseur.montant = this.montant ;}
    if (this.objet) { this.contratFournisseur.objet = this.objet ;}
    if (this.duree) { this.contratFournisseur.duree = this.duree ;}
    if (this.renouvele) { this.contratFournisseur.renouvele = this.renouvele ;}
    if (this.date_debut) { this.contratFournisseur.date_debut = this.date_debut ;}
    if (this.date_fin) { this.contratFournisseur.date_fin = this.date_fin ;}
    if (this.date_de_preavis) { this.contratFournisseur.date_de_preavis = this.date_de_preavis ;}
    if (this.structure_technique) { this.contratFournisseur.structure_technique = this.structure_technique ;}
    if (this.mise_en_demeure) { this.contratFournisseur.mise_en_demeure = this.mise_en_demeure ;}
    if (this.piece_joite) { this.contratFournisseur.piece_joite = this.piece_joite ;}
    if (this.date_de_facturation) { this.contratFournisseur.date_de_facturation = this.date_de_facturation ;}

    console.log(this.id);
  this.contratsservice.editContartFrn(this.contratFournisseur.id_contratFrn,this.contratFournisseur.ref_contrat
    ,this.contratFournisseur.ref_marche,this.contratFournisseur.id_fournisseur,this.contratFournisseur.montant,this.contratFournisseur.objet,
     this.contratFournisseur.duree, this.contratFournisseur.renouvele,this.contratFournisseur.date_debut
     ,this.contratFournisseur.date_fin,this.contratFournisseur.date_de_preavis,this.contratFournisseur.structure_technique,
      this.contratFournisseur.mise_en_demeure,this.contratFournisseur.piece_joite,this.contratFournisseur.date_de_facturation).subscribe(data=>{console.log(data);

      this.contratFournisseur=data;
     },error=>{console.log(error)});
     this.router.navigate(["/home/contrat/TableauBor"]);
   this.toastr.success('Les Information du Contrat de Refirence < '+this.ref_contrat+' > est Modifier Avec Succès ');


   }
   getfournisseurByid(){
     this.contratsservice.getfournisseur(this.id_fournisseur).subscribe(data=>{
       console.log(data);
      this.nom=data[0].nom;
      this.prenom=data[0].prenom;
      console.log(this.nom);
      console.log(this.prenom);
      this.profil=this.nom;
      console.log(this.profil);
     },error=>{console.log(error)});
   }
   onFileSelected(event:any){
    this.selectedFile=<File>event.target.files[0];
  console.log(this.selectedFile);
    // get path of file
    this.photo=this.selectedFile.name;

   console.log(this.photo);
 }
 onUpload(){
   const fd =new FormData();
    fd.append('myFile',this.selectedFile,this.selectedFile.name);
     this.http.post(this.urlService+"uploadimageCF.php",fd,{
       reportProgress:true,
       observe:'events'
    })
     .subscribe((event: any)=>{
       console.log(event);
     // this.photo=this.selectedFile.name;
    });

  }
}
