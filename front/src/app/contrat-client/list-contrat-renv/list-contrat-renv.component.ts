import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ContratClient } from 'src/app/Modele/contratClient';
import { ContratClientserviseService } from 'src/app/Service/contrat-clientservise.service';

@Component({
  selector: 'app-list-contrat-renv',
  templateUrl: './list-contrat-renv.component.html',
  styleUrls: ['./list-contrat-renv.component.css']
})
export class ListContratRenvComponent implements OnInit {
  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;
  Contrats:any=[]
  Client:any[];
  refContrat:any;
  id_contratClient :any[];
  idContratClient:any;
  cont= new ContratClient();
  valeur:any;
  val:any;
  ruser:any;
  date:any;
  constructor(private toastr: ToastrService,private contratClientservise:ContratClientserviseService) { }
  ELEMENT_DATA?:ContratClient[];
  contrat?:ContratClient;
  dataSource!:MatTableDataSource<any>;
  displayedColumns: string[] = ['ref_contrat', 'nom','objet','montant','date_debut','date_fin','element'];
  ngOnInit(): void {
  this.ruser=sessionStorage.getItem("role");
this.taw();
    this.reloadData();
    this.valeur=1;
    this.val=1;
  }
  reloadData() {
    this.contratClientservise.listeCR().subscribe(o =>{
    this.ELEMENT_DATA= o;
    this.dataSource = new MatTableDataSource(o);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort =this.matSort;
    console.log(this.dataSource);
    console.log(this.ELEMENT_DATA);});

  }
  taw(){
    this.contratClientservise.taw().subscribe(data=>{
      console.log(data);
      this.date=data[0].tawa;
      console.log(this.date);

    },error=>{console.log(error)});
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  filterData($event:any){
    this.dataSource.filter = $event.target.value;
  }

   detailsContrat(element:any){
    this.cont=element;
    this.id_contratClient=element.id_contratClient;
        }
  affiche(){
    this.contratClientservise.listeCR().subscribe(data=>{
      console.log(data);
      this.Contrats=data;


    },error=>{console.log(error)});
}
      supprimer(id_contratClient:any){
        this.contratClientservise.deleteContrat(id_contratClient).subscribe(data=>{

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
