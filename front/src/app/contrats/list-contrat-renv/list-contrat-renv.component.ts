import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Contrats } from 'src/app/Modele/Contrats';
import { ContratserviseService } from 'src/app/Service/contratservise.service';

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
  cont= new Contrats();
  id_contratFrn:any;
  refContrat:any;
  Contrats:any=[]
  Fournisseur:any=[]
  valeur:any;
  ruser:any;
  date:any;
  constructor(private toastr: ToastrService,private contratsservice:ContratserviseService) { }
  ELEMENT_DATA?:Contrats[];
  contrat?:Contrats;
  dataSource!:MatTableDataSource<any>;
  displayedColumns: string[] = ['ref_contrat','ref_marche' ,'nom','montant','date_debut','date_fin','element'];
  ngOnInit(): void {
    this.ruser=sessionStorage.getItem("role");
    this.valeur=1;
    this.taw();
    this.reloadData();
  }
  reloadData() {
    this.contratsservice.listeCR().subscribe(o =>{
    this.ELEMENT_DATA= o;
    this.dataSource = new MatTableDataSource(o);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort =this.matSort;
    console.log(this.dataSource);
    console.log(this.ELEMENT_DATA);});

  }

  taw(){
    this.contratsservice.taw().subscribe(data=>{
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
    this.contratsservice.listeCR().subscribe(data=>{
      console.log(data);
      this.Contrats=data;


    },error=>{console.log(error)});
}
detailsContrat(element:any){
  this.cont=element;
  this.id_contratFrn=element.id_contratFrn;
      }
      supprimer(id_contratFrn:any){
        this.contratsservice.deleteContratFr(id_contratFrn).subscribe(data=>{

            console.log(data);


          },error=>console.log(error));
          this.toastr.success('Contrat Supprimé Avec Succes');
          this.reloadData();


        }
      delete(Contrat:any){
        this.id_contratFrn=Contrat.id_contratFrn;
        this.refContrat=Contrat.ref_contrat;

        }
}
