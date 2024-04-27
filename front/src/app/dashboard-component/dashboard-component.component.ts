// import { Component, OnInit } from '@angular/core';
// import Chart from 'chart.js';
// import { NotificationService } from '../Service/notification.service';
// import {
//   chartOptions,
//   parseOptions,
//   chartExample1,
//   chartExample2
// } from "../variables/charts"
// @Component({
//   selector: 'app-dashboard-component',
//   templateUrl: './dashboard-component.component.html',
//   styleUrls: ['./dashboard-component.component.css']
// })
// export class DashboardComponentComponent implements OnInit {
//   public datasets: any;
//   public data: any;
//   public salesChart : any;
//   public clicked: boolean = true;
//   public clicked1: boolean = false;
//   bloc:any;
//   sommemani:any;
//   sommecontartC:any;
//   sommecontartF:any;
//   sommeutilisateur:any;
//   sommeC:any;
//   constructor(private doshbodservice:NotificationService) { }
//   ngOnInit() {
//     this.clacule();
//     this.bloc=sessionStorage.getItem("bloc");
//     this.datasets = [
//       [0, 20, 10, 30, 15, 40, 20, 60, 60],
//       [0, 20, 5, 25, 10, 30, 15, 40, 40]
//     ];
//     this.data = this.datasets[0];


//     var chartOrders = document.getElementById('chart-orders');

//     parseOptions(Chart, chartOptions());


//     var ordersChart = new Chart(chartOrders, {
//       type: 'bar',
//       options: chartExample2.options,
//       data: chartExample2.data
//     });

//     var chartSales = document.getElementById('chart-sales');

//     this.salesChart = new Chart(chartSales, {
// 			type: 'line',
// 			options: chartExample1.options,
// 			data: chartExample1.data
// 		});
//   }


//   public updateOptions() {
//     this.salesChart.data.datasets[0].data = this.data;
//     this.salesChart.update();
//   }

// clacule(){

//   this.doshbodservice.sommeCC().subscribe(date=>{
//     console.log(date);
//     this.sommecontartC=date[0].somme

//   },error=>{console.log("err",error)});

//   this.doshbodservice.sommeCF().subscribe(date=>{
//     console.log(date);
//     this.sommecontartF=date[0].somme

//   },error=>{console.log("err",error)});
//   this.doshbodservice.sommeM().subscribe(date=>{
//     console.log(date);
//     this.sommemani=date[0].somme

//   },error=>{console.log("err",error)});

//   this.doshbodservice.sommeU().subscribe(date=>{
//     console.log(date);
//     this.sommeutilisateur=date[0].somme

//   },error=>{console.log("err",error)});


// }


// }
import { Component, OnInit , ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import Chart from 'chart.js';
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../variables/charts"
import { Router } from '@angular/router';
import { DahsbordserviceService } from '../Service/dahsbordservice.service'
@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  public datasets: any;
  public data: any;
  public contractcalcult = [25, 20, 30, 22, 17, 29];
  public totaluser = 0 ;
  public totalcontract = 0;
  public sumtotal = 0;
  public lastclient = [];
  public lastcontact= [];
  public salesChart : any;
  public line = [0,0,0,0,0]
  public clicked: boolean = true;
  public clicked1: boolean = false;
  bloc:any;
  constructor(private router :Router, private serviced:DahsbordserviceService) { }
  ngOnInit() {
    this.bloc=sessionStorage.getItem("bloc");
    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());
    this.serviced.getlastclient().subscribe(data=>{
this.lastclient = data;
    })

    this.serviced.getlastcontart().subscribe(data=>{
this.lastcontact = data;
    })

    this.serviced.getcalcule().subscribe(data=>{
    this.contractcalcult = data.bare;
    this.totalcontract = data.totalcontart;
    this.totaluser = data.totaluser;
    this.sumtotal = data.sumtotal;
    this.line = data.line;
    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: {
        labels: ["avril", "Mai", "Juin", "Juillet", "aout", "Sebtember"],
        datasets: [
          {
            label: "contract",
            data: data.bare,
            maxBarThickness: 10
          }
        ]
      }
    });
    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartExample1.options,
			data:  {
        labels: ["avril", "Mai", "Juin", "Juillet", "aout", "Sebtember"],
        datasets: [{
          label: 'Performance',
          data: data.line,
        }]
      }
		});
    })


    var chartSales = document.getElementById('chart-sales');


  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }
  navigateclient(){
  this.router.navigate(["/home/clients/liste-client"]);
  }

  navigatecontra(){
    this.router.navigate(["/home/contrat_client/tableauBor"]);
  }

}
