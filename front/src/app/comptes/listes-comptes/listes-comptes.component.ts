import { Comptes } from './../../Modele/Comptes';
import { CompteServiceService } from 'src/app/Service/compte-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-listes-comptes',
  templateUrl: './listes-comptes.component.html',
  styleUrls: ['./listes-comptes.component.css']
})
export class ListesComptesComponent implements OnInit {
  @ViewChild('paginator') paginator!:MatPaginator;
  // AddForSotedData
  @ViewChild(MatSort) matSort!:MatSort;

  constructor(private compteservice:CompteServiceService,private toastr: ToastrService) { }
  ELEMENT_DATA?:Comptes[];
  comptes?:Comptes;
  dataSource!:MatTableDataSource<any>;
  displayedColumns: string[] = ['nom','prenom','num_tel','email','role','element'];
  compte:any=[];
  id_utilisateur:any;
  nom:any;
  compt= new Comptes();

  ngOnInit(): void {

    this.reloadData();
  }
  reloadData() {
    this.compteservice.liste().subscribe(o =>{
    this.ELEMENT_DATA= o;
    this.dataSource = new MatTableDataSource(o);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort =this.matSort;
    console.log(this.dataSource);
    console.log(this.ELEMENT_DATA);});

}
filterData($event:any){
  this.dataSource.filter = $event.target.value;
}
  affiche(){
    this.compteservice.liste().subscribe(data=>{
      console.log(data);
      this.compte=data;
    },error=>{console.log(error)});

  }
  supprimer(compt:any){
    this.compteservice.deletecompte(compt.id_utilisateur).subscribe(data=>{

        console.log(data);
        this.reloadData();
      },error=>console.log(error));
      this.toastr.success('Le Responsable est Supprimé Avec Succès ');
    }
    delete(element:any){
      this.compt=element;
    }
    detailsFournisseur(element:any){
this.compt=element;
    }
}
