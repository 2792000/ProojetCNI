import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  role: any;
user:any
iduser:any
bloc:any;
  constructor() { }

  ngOnInit(): void {
    this.verifroleuser()
  }
  verifroleuser(){

    this.role=sessionStorage.getItem("role");
    this.user=sessionStorage.getItem("userNP");
    this.bloc=sessionStorage.getItem("bloc");
    this.iduser=sessionStorage.getItem("userID");


      }
}
