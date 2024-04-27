import { Client } from './../../Modele/Client';
import { ClientserviceService } from './../../Service/clientservice.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent implements OnInit {
  @ViewChild('paginator') paginator!:MatPaginator;
  // AddForSotedData
  @ViewChild(MatSort) matSort!:MatSort;
  rechercher:FormGroup;
  Client:any=[];
  idclient:any;
  nom:any;
  cli = new Client()
  constructor(private clientservice:ClientserviceService ,private toastr: ToastrService) { }
  ELEMENT_DATA?:Client[];
  client?:Client;
  dataSource!:MatTableDataSource<any>;
  displayedColumns: string[] = ['nom','num_tel','email','fax','element'];

  ngOnInit(): void {
    this.reloadData();
   // this.affiche();

  }
  reloadData() {
    this.clientservice.liste().subscribe(o =>{
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
    this.clientservice.liste().subscribe(data=>{
      console.log(data);
      this.Client=data;


    },error=>{console.log(error)});

  }
  supprimer(element:any){
    this.clientservice.deleteClient(element.id_client).subscribe(data=>{

        console.log(data);
        this.reloadData();
      },error=>console.log(error));
      this.toastr.success("Le Client est Supprimer Avec Succès ");

    }
    delete(element:any){
this.cli=element;
    }
    detailsClient(element:any){
      this.cli=element;
          }

}
