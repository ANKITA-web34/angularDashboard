import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bigChart:any = []; 
  cards:any = [];
  pieCharts:any = [];

  constructor(private dashboardaService: DashboardService) { }

  ngOnInit(): void {
    // this.bigChart = this.dashboardaService.bigCharts();
    this.cards = this.dashboardaService.cards();
    this.pieCharts = this.dashboardaService.pieChart();
  }

}
