import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../Service/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Contrats:any=[];
  ContratsFr:any=[];
  num:any;
  user:any;
  role: any;
  bloc:any;
  id:any;


  constructor(public fb: FormBuilder,private Notificationservice:NotificationService , private router:Router ) { }


  ngOnInit(): void {
    this.archive();
    this.afficheCC();
   // this.afficheCF()
   this.user=sessionStorage.getItem("userNP");
   this.role=sessionStorage.getItem("role");
   this.bloc=sessionStorage.getItem("bloc");
   this.id=sessionStorage.getItem("userID");
  }

  afficheCC(){
    this.Notificationservice.listeCR().subscribe(data=>{
      console.log(data);
      this.Contrats=data;
      //this.num=Contrats.

    },error=>{console.log(error)});

    this.Notificationservice.listeCRF().subscribe(datas=>{
      console.log(datas);
      this.ContratsFr=datas;
    },error=>{console.log(error)});

}
//afficheCF(){}

logout(){
  sessionStorage.removeItem("userID");
  sessionStorage.removeItem("userNP");
  sessionStorage.clear();
  this.router.navigate([""]);
}
archive(){
  this.Notificationservice.archiveCC().subscribe(data=>{
    console.log(data);
  },error=>{console.log(error)});

  this.Notificationservice.archiveCF().subscribe(datas=>{
    console.log(datas);
  },error=>{console.log(error)});
}

}
