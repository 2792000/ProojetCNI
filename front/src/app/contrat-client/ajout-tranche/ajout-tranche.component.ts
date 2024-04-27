import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { payment } from 'src/app/Modele/payment';
import { ContratClientserviseService } from 'src/app/Service/contrat-clientservise.service';

@Component({
  selector: 'app-ajout-tranche',
  templateUrl: './ajout-tranche.component.html',
  styleUrls: ['./ajout-tranche.component.css']
})
export class AjoutTrancheComponent implements OnInit {
  contratCli: payment=new payment()
  addContratCli:FormGroup;
  id_contratClient!:any;

  constructor(private contratClientservise:ContratClientserviseService,private router:Router,private fb: FormBuilder,private toastr: ToastrService,private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.id_contratClient = this.route.snapshot.params['id'];
    this.addContratCli = this.fb.group({
      mant_paym:['', [Validators.required]],
      type_paym:['', [Validators.required]],
      date_paym:['', [Validators.required]],

    })

  }

  ajouter(){
    console.log(this.contratCli);
    console.log(this.contratCli)
    if (this.addContratCli.invalid){
      this.toastr.error("Erreur!!Verifier votre coordonnées");
      return;
    }else {
      console.log(this.contratCli);
     this.contratClientservise.registrepy(this.addContratCli.value,this.id_contratClient).subscribe(data=>{
       console.log(data);
       if (data['RESPONSE'] == "0"){
         alert("login dispo")

       }else{this.router.navigate(["/home/contrat_client/suivi/"+ this.id_contratClient]);
       this.toastr.success('Creation de Contrat Avec Succès ');
       }
       console.log(data['RESPONSE']);
      },
      error => console.log(error));
    }
  }
}
