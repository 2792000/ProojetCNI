import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContratClient } from 'src/app/Modele/contratClient';
import { ContratClientserviseService } from 'src/app/Service/contrat-clientservise.service';

@Component({
  selector: 'app-creation-contrat',
  templateUrl: './creation-contrat.component.html',
  styleUrls: ['./creation-contrat.component.css']
})
export class CreationContratComponent implements OnInit {
  contratCli: ContratClient=new ContratClient()
  addContratCli:FormGroup;
  Clients:any=[];
  selectedFile: File;
  photo: string;
  checkeds:any;
  urlService="http://127.0.0.1/PFE/contrat/";
  piece_joite:any="";
  renouvele:any="";
  test:any;
  constructor(private http:HttpClient,private contratClientservise:ContratClientserviseService,private router:Router,private fb: FormBuilder,private toastr: ToastrService) { }


  ngOnInit(): void {
    this.afficheCl();

    this.addContratCli = this.fb.group({
      ref_contrat:['', [Validators.required]],
      id_client:['', [Validators.required]],
      objet:['', [Validators.required]],
      montant:['', [Validators.required]],
      date_debut:['', [Validators.required]],
      date_fin:['', [Validators.required]],
      duree:['', [Validators.required]],
      structure_technique:['', [Validators.required]],
      piece_joite:[''],
      renouvele:[''],
      date_de_facturation:['', [Validators.required]],
    })
  }
  onCheckboxChange(e:any) {
    console.log(e.target.checked);
    this.checkeds=e.target.checked
    }
  onSubmit(){
    console.log(this.checkeds);
    if(this.checkeds==true){
      this.addContratCli.value.ref_contrat.renouvele=1
    }
    else{this.addContratCli.value.ref_contrat.renouvele=0}
     this.contratCli.renouvele=this.addContratCli.value.renouvele;
     this.contratCli.ref_contrat=this.addContratCli.value.ref_contrat;
     this.contratCli.id_client=this.addContratCli.value.id_client;
     this.contratCli.objet=this.addContratCli.value.objet;
     this.contratCli.montant=this.addContratCli.value.montant;
     this.contratCli.date_debut=this.addContratCli.value.date_debut;
     this.contratCli.date_fin=this.addContratCli.value.date_fin;
     this.contratCli.duree=this.addContratCli.value.duree;
     this.contratCli.structure_technique=this.addContratCli.value.structure_technique;
     this.contratCli.piece_joite=this.addContratCli.value.piece_joite;
     this.contratCli.date_de_facturation=this.addContratCli.value.date_de_facturation;
     this.ajouter();

   }

  afficheCl(){
    this.contratClientservise.listeCl().subscribe(data=>{
      console.log(data);
      this.Clients=data;


    },error=>{console.log(error)});
  }
  get f() { return this.addContratCli.controls; }
  ajouter(){
    this.recherche()
    console.log(this.contratCli);
    console.log(this.contratCli)
    if (this.addContratCli.invalid){
      this.toastr.error("Erreur!!Verifier votre coordonnées");
      return;
    }else {
      if (this.test.length > 0){
        this.toastr.error('Erreur!!Cet réference est déjà utilisé');
       }else{
      console.log(this.contratCli);
     this.contratClientservise.registre(this.addContratCli.value).subscribe(data=>{
       console.log(data);
       if (data['RESPONSE'] == "0"){
         alert("login dispo")

       }else{this.router.navigate(["/home/contrat_client/tableauBor"]);
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


  onUpload(){
    const fd =new FormData();
     fd.append('myFile',this.selectedFile,this.selectedFile.name);
      this.http.post(this.urlService+"uploadimageCC.php",fd,{
        reportProgress:true,
        observe:'events'
     })
      .subscribe((event: any)=>{
        console.log(event);
      // this.photo=this.selectedFile.name;
     });

   }
   recherche(){
    this.contratClientservise.recherche(this.addContratCli.value.ref_contrat).subscribe(data=>{
      console.log(data);
      this.test=data;
     },error => console.log(error));
  }
}
