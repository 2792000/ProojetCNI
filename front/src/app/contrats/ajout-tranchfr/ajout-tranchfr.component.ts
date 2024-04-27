import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Paymentfr } from 'src/app/Modele/Paymentfr';
import { ContratserviseService } from 'src/app/Service/contratservise.service';

@Component({
  selector: 'app-ajout-tranchfr',
  templateUrl: './ajout-tranchfr.component.html',
  styleUrls: ['./ajout-tranchfr.component.css']
})
export class AjoutTranchfrComponent implements OnInit {
  contrat: Paymentfr=new Paymentfr()
  addContrat:FormGroup;
  id_contratFrn!:any;
  test:any;
  constructor(private contratservice:ContratserviseService,private router:Router,private fb: FormBuilder,private toastr: ToastrService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id_contratFrn = this.route.snapshot.params['id'];
    this.addContrat = this.fb.group({
      mant_paym:['', [Validators.required]],
      type_paym:['', [Validators.required]],
      date_paym:['', [Validators.required]],

    })
  }
  ajouter(){
    this.recherche();
    console.log(this.contrat);
    console.log(this.contrat)
    if (this.addContrat.invalid){
      this.toastr.error("Erreur!!Verifier votre coordonnées");
      return;
    }else {
      if (this.test.length > 0){
        this.toastr.error('Erreur!!Cet réference est déjà utilisé');
       }else{
      console.log(this.contrat);
     this.contratservice.registrepy(this.addContrat.value,this.id_contratFrn).subscribe(data=>{
       console.log(data);
       if (data['RESPONSE'] == "0"){
         alert("login dispo")

       }else{this.router.navigate(["/home/contrat/payment/"+ this.id_contratFrn]);
       this.toastr.success('Creation de Contrat Avec Succès ');
       }
       console.log(data['RESPONSE']);
      },
      error => console.log(error));
    }
  }
  }
  recherche(){
    this.contratservice.recherche(this.addContrat.value.ref_contrat).subscribe(data=>{
      console.log(data);
      this.test=data;
     },error => console.log(error));
  }
}
