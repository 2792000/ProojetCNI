import { ContratserviseService } from './../../Service/contratservise.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contrats } from 'src/app/Modele/Contrats';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-creation-contrat',
  templateUrl: './creation-contrat.component.html',
  styleUrls: ['./creation-contrat.component.css']
})
export class CreationContratComponent implements OnInit {
  ContratFrn: Contrats=new Contrats();
  addContrat:FormGroup;
  Fournisseur:any=[];
  selectedFile: File;
  photo: string;
  checkeds:any;
  urlService="http://127.0.0.1/PFE/contrat";
  loading: boolean;
  shortLink: any;
  test:any;
  constructor(private http:HttpClient,private contratsservise:ContratserviseService,private router:Router,private fb: FormBuilder,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.affichefr();

    this.addContrat = this.fb.group({
      ref_contrat:['', [Validators.required]],
      id_fournisseur:['', [Validators.required]],
      ref_marche:['', [Validators.required]],
      objet:['', [Validators.required]],
      montant:['', [Validators.required]],
      date_debut:['', [Validators.required]],
      date_fin:['', [Validators.required]],
      duree:['', [Validators.required]],
      mise_en_demeure:['', [Validators.required]],
      structure_technique:['', [Validators.required]],
      piece_joite:[''],
      date_de_preavis:['', [Validators.required]],
      date_de_facturation:['', [Validators.required]],

    })
  }
  onCheckboxChange(e:any) {
    console.log(e.target.checked);
    this.checkeds=e.target.checked
    }
onUpload() {
    this.loading = !this.loading;
     console.log(this.selectedFile);
      this.contratsservise.upload(this.selectedFile).subscribe(
         (event: any) => {
             if (typeof (event) === 'object') {


                  this.shortLink = event.link;

                this.loading = false; // Flag variable
                         }
                         this.addContrat.value.piece_joite= this.selectedFile.name;
        }
    );
   }

   onSubmit(){
    console.log(this.addContrat.value.piece_joite)
this.addContrat.value.piece_joite= this.selectedFile.name;
    this.ContratFrn.ref_contrat=this.addContrat.value.ref_contrat;
    this.ContratFrn.id_fournisseur=this.addContrat.value.id_fournisseur;
    this.ContratFrn.ref_marche=this.addContrat.value.ref_marche;
    this.ContratFrn.objet=this.addContrat.value.objet;
    this.ContratFrn.montant=this.addContrat.value.montant;
    this.ContratFrn.date_debut=this.addContrat.value.date_debut;
    this.ContratFrn.date_fin=this.addContrat.value.date_fin;
    this.ContratFrn.duree=this.addContrat.value.duree;
    this.ContratFrn.mise_en_demeure=this.addContrat.value.mise_en_demeure;
    this.ContratFrn.structure_technique=this.addContrat.value.structure_technique;
    this.ContratFrn.piece_joite=this.addContrat.value.piece_joite;
    this.ContratFrn.date_de_preavis=this.addContrat.value.date_de_preavis;
    this.ContratFrn.date_de_facturation=this.addContrat.value.date_de_facturation;
    this.ajouter();

  }
  affichefr(){
    this.contratsservise.listefr().subscribe(data=>{
      console.log(data);
      this.Fournisseur=data;
    },error=>{console.log(error)});
  }
  get f() { return this.addContrat.controls; }
  ajouter(){
    this.recherche();
    this.ContratFrn.piece_joite=this.addContrat.value.piece_joite;
    this.addContrat.value.piece_joite=this.photo
    console.log(this.ContratFrn)

    if (this.addContrat.invalid){
      this.toastr.error("Erreur!!Verifier votre coordonnées");
      return;
    }else {
      if (this.test.length > 0){
        this.toastr.error('Erreur!!Cet réference est déjà utilisé');
       }else{
      console.log(this.addContrat.value);
     this.contratsservise.registre(this.addContrat.value).subscribe(data=>{
       console.log(data);
       if (data['RESPONSE'] == "0"){
         alert("login dispo")
       }else{this.router.navigate(["/home/contrat/TableauBor"]);
       this.toastr.success('Creation de Contrat Avec Succès ');
       }
       console.log(data['RESPONSE']);
      },
      error => console.log(error));
    }
  }
    }
    onFileSelected(event:any){
      this.selectedFile=<File>event.target.files[0];
    console.log(this.selectedFile);
      // get path of file
      this.photo=this.selectedFile.name;

     console.log(this.photo);
   }
   recherche(){
    this.contratsservise.recherche(this.addContrat.value.ref_contrat).subscribe(data=>{
      console.log(data);
      this.test=data;
     },error => console.log(error));
  }
}
