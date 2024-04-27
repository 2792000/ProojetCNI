import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ContratClientserviseService } from 'src/app/Service/contrat-clientservise.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modifier-contrat',
  templateUrl: './modifier-contrat.component.html',
  styleUrls: ['./modifier-contrat.component.css']
})
export class ModifierContratComponent implements OnInit {
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
  piece_joite:any;
  date_de_facturation:any;
  nom:any;
  prenom:any;
  profil:any;
  selectedFile: File;
  photo: string;
  urlService="http://127.0.0.1/PFE/contrat/";
  constructor(private http:HttpClient,private contartclientservice:ContratClientserviseService,private router:Router,private route:ActivatedRoute,private fb:FormBuilder,private toastr: ToastrService) { }
  contratClient:any=[];
  Clients:any=[];

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
      this.piece_joite=this.contratClient.piece_jointe;
      this.date_de_facturation=this.contratClient.date_de_facturation;
      this.contratClient=this.contratClient[0];
      this.getClientByid();

    },error=>{console.log(error)});

  }
  modifier(id:any){
    this.contratClient=[];
    if (this.id) { this.contratClient.id_contratClient = this.id ;}
    if (this.ref_contrat) { this.contratClient.ref_contrat = this.ref_contrat ;}
    if (this.id_client) { this.contratClient.id_client = this.id_client ;}

    if (this.montant) { this.contratClient.montant = this.montant ;}
    if (this.objet) { this.contratClient.objet = this.objet ;}
    if (this.duree) { this.contratClient.duree = this.duree ;}
    if (this.renouvele) { this.contratClient.renouvele = this.renouvele ;}
    if (this.date_debut) { this.contratClient.date_debut = this.date_debut ;}
    if (this.date_fin) { this.contratClient.date_fin = this.date_fin ;}
    if (this.structure_technique) { this.contratClient.structure_technique = this.structure_technique ;}
    if (this.piece_joite) { this.contratClient.piece_jointe = this.piece_joite ;}
    if (this.date_de_facturation) { this.contratClient.date_de_facturation = this.date_de_facturation ;}

    console.log(this.id);
  this.contartclientservice.editContartClient(this.contratClient.id_contratClient,this.contratClient.ref_contrat
    ,this.contratClient.id_client,this.contratClient.montant,this.contratClient.objet,
     this.contratClient.duree, this.contratClient.renouvele,this.contratClient.date_debut
     ,this.contratClient.date_fin,this.contratClient.structure_technique,
      this.contratClient.piece_jointe,this.contratClient.date_de_facturation).subscribe(data=>{console.log(data);

      this.contratClient=data;
     },error=>{console.log(error)});
     this.router.navigate(["/home/contrat_client/tableauBor"]);
     this.toastr.success('Les Information du Contrat de Refirence < '+this.ref_contrat+' > est Modifier Avec Succès ');

   }
   getClientByid(){
    this.contartclientservice.getByIdCl(this.id_client).subscribe(data=>{
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
