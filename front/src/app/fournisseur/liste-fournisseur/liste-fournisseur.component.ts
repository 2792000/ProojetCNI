
import { ToastrService } from 'ngx-toastr';
import { FournisseurserviceService } from 'src/app/Service/fournisseurservice.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Fournisseur } from 'src/app/Modele/Fournisseurs';
@Component({
  selector: 'app-liste-fournisseur',
  templateUrl: './liste-fournisseur.component.html',
  styleUrls: ['./liste-fournisseur.component.css']
})
export class ListeFournisseurComponent implements OnInit {
  @ViewChild('paginator') paginator!:MatPaginator;
  // AddForSotedData
  @ViewChild(MatSort) matSort!:MatSort;
  idFr:any;
  nomp:any;
  Frn=new Fournisseur();

  constructor(private Fournisseurservice:FournisseurserviceService,private toastr: ToastrService ,) { }
  ELEMENT_DATA?:Fournisseur[];
  fournisseur?:Fournisseur;
  dataSource!:MatTableDataSource<any>;
  displayedColumns: string[] = ['nom','num_tel','fax','adresse','element'];
  fourniseur:any=[];

  ngOnInit(): void {
    this.reloadData();
    this.affiche();

  }
  reloadData() {
    this.Fournisseurservice.liste().subscribe(o =>{
    this.ELEMENT_DATA= o;
    this.dataSource = new MatTableDataSource(o);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort =this.matSort;
    console.log(this.dataSource);
    console.log(this.ELEMENT_DATA);});

}
  affiche(){
    this.Fournisseurservice.liste().subscribe(data=>{
      this.fourniseur=data;

    },error=>{console.log(error)});

  }
  //search
  filterData($event:any){
    this.dataSource.filter = $event.target.value;
  }
   supprimer(element:any){
   this.Fournisseurservice.deletefournisseur(element.id_fournisseur).subscribe(data=>{

       console.log(data);
       this.reloadData();
     },error=>console.log(error));
     this.toastr.success('Le Fournisseur est Supprimer Avec Succès ')
   }
   delete(element:any){
    this.Frn=element;

  }
  detailsFrn(element:any){
    this.Frn=element;
        }
}


