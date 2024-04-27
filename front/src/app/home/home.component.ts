import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart : any;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  bloc:any;
  ngOnInit() {

    this.bloc=sessionStorage.getItem("bloc");

  }








}

