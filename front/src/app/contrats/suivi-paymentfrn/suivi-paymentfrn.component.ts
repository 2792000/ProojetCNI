import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContratserviseService } from 'src/app/Service/contratservise.service';

@Component({
  selector: 'app-suivi-paymentfrn',
  templateUrl: './suivi-paymentfrn.component.html',
  styleUrls: ['./suivi-paymentfrn.component.css']
})
export class SuiviPaymentfrnComponent implements OnInit {
  refcontart : any ;
  objectcontract: any ;
  Contrats:any=[]
  id_contratFrn:any[]
  id_payment:any;
  constructor(private contratservice:ContratserviseService,private router:Router,private route:ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.affiche()
  }
  affiche(){
    this.id_contratFrn = this.route.snapshot.params['id'];
    this.contratservice.listetranche(this.id_contratFrn).subscribe(data=>{
      console.log(data);

      if(data.length > 0 )
      {
        this.Contrats=data;
        this.refcontart = data[0].ref_contrat;
        this.objectcontract = data[0].objet
      }
    },error=>{console.log("err",error)});

   }
   retourprecedent(){
    this.router.navigateByUrl('home/contrat/TableauBor');
   }
   supprimer(id_payment:any){
    this.contratservice.deleteTranche(id_payment).subscribe(data=>{
      this.affiche();
        console.log(data);
        this.affiche();
      },error=>console.log(error));
      this.toastr.success('Tranche Supprimer Avec Succes');
      this.affiche();


    }
  delete(idpy:any){
    this.id_payment=idpy;


    }
}

