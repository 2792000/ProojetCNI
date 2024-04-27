import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { CorbeilleService } from '../Service/corbeille.service';

@Component({
  selector: 'app-corbeille',
  templateUrl: './corbeille.component.html',
  styleUrls: ['./corbeille.component.css']
})
export class CorbeilleComponent implements OnInit {
  Client:any=[];
  Fournisseur:any=[];
  ContratC:any=[];
  ContratF:any=[];
  ruser:any;

  constructor( private corbeille:CorbeilleService ,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.ruser=sessionStorage.getItem("role");
    this.affichec();
    this.affichef();
    this.afficheCC();
    this.afficheCF();
  }
  affichec(){
    this.corbeille.listesupClient().subscribe(data=>{
      console.log(data);
      this.Client=data;
    },error=>{console.log(error)});

  }
  affichef(){
    this.corbeille.listesupFrn().subscribe(data=>{
      console.log(data);
      this.Fournisseur=data;
    },error=>{console.log(error)});
  }
  afficheCC(){
    this.corbeille.listesupCC().subscribe(data=>{
      console.log(data);
      this.ContratC=data;
    },error=>{console.log(error)});
  }
  afficheCF(){
    this.corbeille.listesupCF().subscribe(data=>{
      console.log(data);
      this.ContratF=data;
    },error=>{console.log(error)});
  }
  restaurerc(id_client:any){
    this.corbeille.restaurer(id_client).subscribe(data=>{
      console.log(data);
    this.affichec();
    },error=>{console.log(error)});
    this.affichec();
  }
  restaurerF(id_fournisseur:any){
    this.corbeille.restaurerF(id_fournisseur).subscribe(data=>{
      console.log(data);
    this.affichef();
    },error=>{console.log(error)});
    this.affichef();
  }
  restaurerCC(id_contratClient:any){
    this.corbeille.restaurerCC(id_contratClient).subscribe(data=>{
      console.log(data);
    this.afficheCC();
    },error=>{console.log(error)});
    this.afficheCC();
  }
  restaurerCF(id_contratFrn:any){
    this.corbeille.restaurerCF(id_contratFrn).subscribe(data=>{
      console.log(data);
    this.afficheCF();
    },error=>{console.log(error)});
    this.afficheCF();
  }
}
