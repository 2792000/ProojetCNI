import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContratClient } from 'src/app/Modele/contratClient';
import { ContratClientserviseService } from 'src/app/Service/contrat-clientservise.service';


@Component({
  selector: 'app-suivi-payment',
  templateUrl: './suivi-payment.component.html',
  styleUrls: ['./suivi-payment.component.css']
})

export class SuiviPaymentComponent implements OnInit {
  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;
  id_payment:any;
  refcontart : any ;
  montant : any ;
  somme:any;
  objectcontract: any ;
  Contrats:any=[]

  id_contratClient:any[]
  constructor(private contratClientservise:ContratClientserviseService,private router:Router,private route:ActivatedRoute,private toastr: ToastrService) { }
  ELEMENT_DATA?:ContratClient[];
  contrat?:ContratClient;
  dataSource!:MatTableDataSource<any>;
  displayedColumns: string[] = ['ref_contrat', 'nom','objet','mant_paym','date_paym','element'];
  ngOnInit() {

     this.affiche();
    //  this.reloadData();
  }

  affiche(){
    this.id_contratClient = this.route.snapshot.params['id'];
    this.contratClientservise.listetranche(this.id_contratClient).subscribe(data=>{
      console.log(data);

      if(data.length > 0 )
      {
        this.Contrats=data;
        this.refcontart = data[0].ref_contrat;
        this.objectcontract = data[0].objet;
        this.montant=data[0].montant;
      }
    },error=>{console.log("err",error)});

    this.contratClientservise.sommepy(this.id_contratClient).subscribe(date=>{
      console.log(date);
      this.somme=date[0].somme

    },error=>{console.log("err",error)});

   }
  //  reloadData() {
  //   this.id_contratClient = this.route.snapshot.params['id'];
  //   this.contratClientservise.listetranche(this.id_contratClient).subscribe(o =>{
  //   this.ELEMENT_DATA= o;
  //   if(o .length > 0 )
  //     {
  //       this.Contrats=o ;
  //       this.refcontart = o [0].ref_contrat;
  //       this.objectcontract = o [0].objet;
  //       this.montant=o[0].montant;
  //     }
  //   this.dataSource = new MatTableDataSource(o);
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort =this.matSort;
  //   console.log(this.dataSource);
  //   console.log(this.ELEMENT_DATA);});

  // }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  filterData($event:any){
    this.dataSource.filter = $event.target.value;
  }
   retourprecedent(){
    this.router.navigateByUrl('/home/contrat_client/tableauBor');
   }
   supprimer(id_payment:any){
    this.contratClientservise.deleteTranche(id_payment).subscribe(data=>{
        console.log(data);
      },error=>console.log(error));
      this.toastr.success('Contrat Supprimer Avec Succes');
      this.affiche();


    }
  delete(idpy:any){
    this.id_payment=idpy;


    }
}
