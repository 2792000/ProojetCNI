import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ContratClient } from 'src/app/Modele/contratClient';
import { ContratClientserviseService } from 'src/app/Service/contrat-clientservise.service';
import { NotificationService } from 'src/app/Service/notification.service';

@Component({
  selector: 'app-archivecc',
  templateUrl: './archivecc.component.html',
  styleUrls: ['./archivecc.component.css']
})
export class ArchiveccComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;
  Contrats:any=[]
  Client:any[];
  refContrat:any;
  id_contratClient :any[];
  idContratClient:any;
  cont= new ContratClient();
  ruser:any;
  constructor(private archive:ContratClientserviseService, private toastr: ToastrService) { }
  ELEMENT_DATA?:ContratClient[];
  contrat?:ContratClient;
  dataSource!:MatTableDataSource<any>;
  displayedColumns: string[] = ['ref_contrat', 'nom','objet','montant','date_debut','date_fin','element'];

  ngOnInit(): void {
    this.ruser=sessionStorage.getItem("role");

    this.reloadData();
}
reloadData() {
 this.archive.listearchiveCC().subscribe(o =>{
 this.ELEMENT_DATA= o;
 this.dataSource = new MatTableDataSource(o);
 this.dataSource.paginator = this.paginator;
 this.dataSource.sort =this.matSort;
 console.log(this.dataSource);
 console.log(this.ELEMENT_DATA);});

}



applyFilter(filterValue: string) {
 filterValue = filterValue.trim(); // Remove whitespace
 filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
 this.dataSource.filter = filterValue;
}
filterData($event:any){
 this.dataSource.filter = $event.target.value;
}
affiche(){
 this.archive.liste().subscribe(data=>{
   console.log(data);
   this.Contrats=data;
 },error=>{console.log(error)});

}
detailsContrat(element:any){
 this.cont=element;
 this.cont.piece_joite=element.piece_jointe;
 this.id_contratClient=element.id_contratClient;
     }
     supprimer(id_contratClient:any){
       this.archive.deleteContrat(id_contratClient).subscribe(data=>{

           console.log(data);


         },error=>console.log(error));
         this.toastr.success('Contrat Supprimé Avec Succes');
         this.reloadData();


       }
     delete(Contrat:any){
       this.idContratClient=Contrat.id_contratClient;
       this.refContrat=Contrat.ref_contrat;

       }
}
