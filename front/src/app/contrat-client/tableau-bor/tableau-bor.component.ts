import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ContratClientserviseService } from 'src/app/Service/contrat-clientservise.service';
// AddForPaginator
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
//add For Sorted
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ContratClient } from 'src/app/Modele/contratClient';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-tableau-bor',
  templateUrl: './tableau-bor.component.html',
  styleUrls: ['./tableau-bor.component.css']
})
export class TableauBorComponent implements OnInit {
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
  ruser:any;
  date:any;
  constructor(private toastr: ToastrService,private contratClientservise:ContratClientserviseService) { }

  ELEMENT_DATA?:ContratClient[];
  contrat?:ContratClient;
  dataSource!:MatTableDataSource<any>;
  displayedColumns: string[] = ['ref_contrat', 'nom','objet','montant','date_debut','date_fin','element'];

  ngOnInit(){
  this.ruser=sessionStorage.getItem("role");
  this.taw();

       this.reloadData();
  }
  reloadData() {
    this.contratClientservise.liste().subscribe(o =>{
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
  affiche(){
    this.contratClientservise.liste().subscribe(data=>{
      console.log(data);
      this.Contrats=data;
    },error=>{console.log(error)});

   }
   detailsContrat(element:any){
    this.cont=element;
    this.cont.piece_joite=element.piece_jointe;
    console.log(this.cont.piece_joite)
    this.id_contratClient=element.id_contratClient;
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

