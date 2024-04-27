import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContratClientserviseService } from 'src/app/Service/contrat-clientservise.service';

@Component({
  selector: 'app-imprime-contrat',
  templateUrl: './imprime-contrat.component.html',
  styleUrls: ['./imprime-contrat.component.css'],
  providers: [DatePipe]
})
export class ImprimeContratComponent implements OnInit {
  id_contratClient:any;
  id:any;
  ref_contrat:any;
  id_client:any;
  montant:any;
  objet:any;
  duree:any;
  date_debut:any;
  date_fin:any;
  nom:any;
  fax:any;
  adresse:any;
  num_tel:any;
  date:any=new Date()
  now:any;
  constructor(private datepipe:DatePipe,private contratClientservise:ContratClientserviseService,private route:ActivatedRoute) { }
  contratClient:any=[];
  Clients:any=[];

  ngOnInit(): void {
    this.now=this.datepipe.transform(this.date,"yyyy-MM-dd")
    this.id = this.route.snapshot.params['id'];
    this.contratClientservise.getById(this.id).subscribe(data=>{
      console.log(this.id);
      this.contratClient=data[0];
      console.log(data);
      console.log(this.contratClient);
      this.id_contratClient=this.id;
      this.ref_contrat=this.contratClient.ref_contrat;
      this.id_client=this.contratClient.id_client;
      this.montant=this.contratClient.montant;
      this.objet=this.contratClient.objet;
      this.duree=this.contratClient.duree;
      this.date_debut=this.contratClient.date_debut;
      this.date_fin=this.contratClient.date_fin;
      this.contratClient=this.contratClient[0];
      this.getClientByid();
    })
    this.affiche();

  }
  getClientByid(){
    this.contratClientservise.getByIdCl(this.id_client).subscribe(data=>{
      console.log(data);
     this.nom=data[0].nom;
     this.fax=data[0].fax;
     this.adresse=data[0].adresse;
     this.num_tel=data[0].num_tel;

     console.log(this.nom);
     console.log(this.fax);
     console.log(this.adresse);
     console.log(this.num_tel);
    },error=>{console.log(error)});
  }
  affiche(){
    this.contratClientservise.liste().subscribe(data=>{
      console.log(data);
      this.contratClient=data;


    },error=>{console.log(error)});
    this.contratClientservise.getByIdCl(this.contratClient.id_client).subscribe(data=>{
      console.log(data);
      this.date_debut=data['date_debut']
      this.Clients=data;


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
