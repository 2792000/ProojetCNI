import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Contrats } from 'src/app/Modele/Contrats';
import { ContratserviseService } from 'src/app/Service/contratservise.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-tableau-bor',
  templateUrl: './tableau-bor.component.html',
  styleUrls: ['./tableau-bor.component.css']
})
export class TableauBorComponent  {
  @ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) matSort: MatSort;

cont=new Contrats();
ref=new Contrats();
id=new Contrats();
ruser:any;
date:any;
constructor( private contratservice:ContratserviseService ,private toastr: ToastrService) {}
ELEMENT_DATA?:Contrats[];
contrat?:Contrats;
dataSource!:MatTableDataSource<any>;
displayedColumns: string[] = ['ref_contrat','ref_marche', 'nom','objet','montant','date_debut','date_fin','element'];

 ngOnInit(): void {
  this.ruser=sessionStorage.getItem("role");
  this.taw();
  this.reloadData();


}
reloadData() {
  this.contratservice.liste().subscribe(o =>{
  this.ELEMENT_DATA= o;
  this.dataSource = new MatTableDataSource(o);
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort =this.matSort;
  console.log(this.dataSource);
  console.log(this.ELEMENT_DATA);});

}
taw(){
  this.contratservice.taw().subscribe(data=>{
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
      }
      supprimer(id_contratClient:any){
        this.contratservice.deleteContratFr(id_contratClient).subscribe(data=>{
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

