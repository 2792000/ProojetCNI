import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContratserviseService } from 'src/app/Service/contratservise.service';

@Component({
  selector: 'app-affiche-contrat',
  templateUrl: './affiche-contrat.component.html',
  styleUrls: ['./affiche-contrat.component.css'],
  providers: [DatePipe]
})
export class AfficheContratComponent implements OnInit {
  id_contratFrn:any;
  id:any;
  ref_contrat:any;
  id_fournisseur:any;
  montant:any;
  objet:any;
  duree:any;
  date_debut:any;
  date_fin:any;
  nom:any;
  prenom:any;
  cin:any;
  adresse:any;
  num_tel:any;
  fax:any;
  date:any=new Date()
  now:any;
  contratFrn:any=[];
  Fournisseur:any=[];
  constructor(private datepipe:DatePipe,private contratsservise:ContratserviseService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.now=this.datepipe.transform(this.date,"yyyy-MM-dd")
    this.id = this.route.snapshot.params['id'];
    this.contratsservise.getById(this.id).subscribe(data=>{
      console.log(this.id);
      this.contratFrn=data[0];
      console.log(data);
      console.log(this.contratFrn);
      this.id_contratFrn=this.id;
      this.ref_contrat=this.contratFrn.ref_contrat;
      this.id_fournisseur=this.contratFrn.id_fournisseur;
      this.montant=this.contratFrn.montant;
      this.objet=this.contratFrn.objet;
      this.duree=this.contratFrn.duree;
      this.date_debut=this.contratFrn.date_debut;
      this.date_fin=this.contratFrn.date_fin;

      this.contratFrn=this.contratFrn[0];
      this.getClientByid();})
    this.affiche();


  }
  getClientByid(){
    this.contratsservise.getFrnById(this.id_fournisseur).subscribe(data=>{
      console.log(data);
     this.nom=data[0].nom;
     this.prenom=data[0].prenom;
     this.cin=data[0].cin;
     this.adresse=data[0].adresse;
     this.num_tel=data[0].num_tel;
     this.fax=data[0].fax;

     console.log(this.nom);
     console.log(this.prenom);
     console.log(this.cin);
     console.log(this.adresse);
     console.log(this.num_tel);
    },error=>{console.log(error)});
  }
  affiche(){
    this.contratsservise.liste().subscribe(data=>{
      console.log(data);
      this.contratFrn=data;


    },error=>{console.log(error)});
}
printdoc(){

  const element: Element = document.getElementById('print');
  console.log(element)
  let myWindows = window.open('', 'PRINT', 'height=400,with=600');
  // myWindows.document.write("<!DOCTYPE html><html><head><meta charset='utf-8'><meta http-equiv='X-UA-Compatible' content='IE=edge'>"+
  // + "<meta name='viewport' content='width=device-width, initial-scale=1'>"
  // + "<link rel='stylesheet' type='text/css' media='screen' href='./generate-pdf-description.component.scss'>");
  // myWindows.document.write('</head><body>');
  myWindows.document.write(element.innerHTML);
  myWindows.document.write('</body></html>');
  myWindows.document.close();
  myWindows.focus();
  myWindows.print();
}
}
