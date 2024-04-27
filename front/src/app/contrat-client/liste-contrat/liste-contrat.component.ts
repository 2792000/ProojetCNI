import { DatePipe } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContratClientserviseService } from 'src/app/Service/contrat-clientservise.service';

@Component({
  selector: 'app-liste-contrat',
  templateUrl: './liste-contrat.component.html',
  styleUrls: ['./liste-contrat.component.css'],
  providers: [DatePipe]
})
export class ListeContratComponent implements OnInit {
  Contrats:any=[]
  Client:any[];
  idContratClient:any;
  refContrat:any;
  date:any=new Date()
  now:any;
  nows:any;

 constructor(private datepipe:DatePipe, private contratClientservise:ContratClientserviseService ,private toastr: ToastrService) { }
 dataSource!:MatTableDataSource<any>;
  ngOnInit(): void {
this.now=this.datepipe.transform(this.date,"yyyy-MM-dd")
this.nows=this.datepipe.transform(this.date,"yyyy-MM-dd")
console.log(this.now)
    this.affiche();
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.Contrats.filter = filterValue;
  }
  filterData($event:any){
    this.Contrats.filter = $event.Contrats.value;
    this.affiche();
  }
  affiche(){
    this.contratClientservise.liste().subscribe(data=>{
      console.log(data);
      this.Contrats=data;
    },error=>{console.log(error)});

   }

  supprimer(id_contratClient:any){
    this.contratClientservise.deleteContrat(id_contratClient).subscribe(data=>{
      this.affiche();
        console.log(data);
        this.affiche();
      },error=>console.log(error));
      this.toastr.success('Contrat Supprimer Avec Succes');
      this.affiche();this.affiche();this.affiche();


    }
  delete(idContratClient:any,refContrat:any){
    this.idContratClient=idContratClient;
    this.refContrat=refContrat;

    }

}
