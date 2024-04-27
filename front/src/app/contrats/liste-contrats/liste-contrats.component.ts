import { Fournisseur } from 'src/app/Modele/Fournisseurs';
import { ContratserviseService } from './../../Service/contratservise.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-liste-contrats',
  templateUrl: './liste-contrats.component.html',
  styleUrls: ['./liste-contrats.component.css'],
  providers: [DatePipe]
})
export class ListeContratsComponent implements OnInit {
  Contrats:any=[]
  Fournisseur:any=[]
  idContratFrn:any;
  refContrat:any;
  date:any=new Date()
  now:any;
  nows:any;
  constructor(private datepipe:DatePipe,private contratsservice:ContratserviseService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.now=this.datepipe.transform(this.date,"yyyy-MM-dd")
this.nows=this.datepipe.transform(this.date,"yyyy-MM-dd")
console.log(this.now)
    this.affiche();
  }
  affiche(){
    this.contratsservice.liste().subscribe(data=>{
      console.log(data);
      this.Contrats=data;


    },error=>{console.log(error)});
}

supprimer(id_contratFrn:any){
  this.contratsservice.deleteContratFr(id_contratFrn).subscribe(data=>{
      console.log(data);
      this.affiche();
    },error=>console.log(error));
   this.toastr.success('Contrat Supprimer Avec Succes');
  }
  delete(id_contratFrn:any,refContrat:any){
    this.idContratFrn=id_contratFrn;
    this.refContrat=refContrat;
        }
}
