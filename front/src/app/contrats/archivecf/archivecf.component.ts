import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Contrats } from 'src/app/Modele/Contrats';
import { ContratserviseService } from 'src/app/Service/contratservise.service';

@Component({
  selector: 'app-archivecf',
  templateUrl: './archivecf.component.html',
  styleUrls: ['./archivecf.component.css']
})
export class ArchivecfComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;

  cont=new Contrats();
  ref=new Contrats();
  id=new Contrats();
  ruser:any;
  constructor( private archiv:ContratserviseService ,private toastr: ToastrService) {}
  ELEMENT_DATA?:Contrats[];
  contrat?:Contrats;
  dataSource!:MatTableDataSource<any>;
  displayedColumns: string[] = ['ref_contrat','ref_marche', 'nom','objet','montant','date_debut','date_fin','element'];

   ngOnInit(): void {
    this.ruser=sessionStorage.getItem("role");

    this.reloadData();


  }
  reloadData() {
    this.archiv.listearchiveCF().subscribe(o =>{
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
  detailsContrat(element:any){
    this.cont=element;
        }
        supprimer(id_contratClient:any){
          this.archiv.deleteContratFr(id_contratClient).subscribe(data=>{
            this.reloadData();
              console.log(data);
              this.reloadData();
            },error=>console.log(error));
            this.toastr.success('Contrat Supprimé Avec Succes');
            this.reloadData();
          }
        delete(Contrat:any){
          this.id=Contrat.id_contratFrn;
          this.ref=Contrat.ref_contrat;
          }
  }
