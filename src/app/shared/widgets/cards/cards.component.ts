import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widgets-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() total: string = ''; 
  @Input() precentage: string = '';
  @Input() lable: string = '';
  @Input() data: any = [];

    
  Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'areaspline',         
      },
      title: {
        text: 'One Direction'
      },
      legend: {
          layout: 'vertical',
          align: 'left',
          verticalAlign: 'top',
          x: 150,
          y: 100,
          floating: true,
          borderWidth: 1,
          backgroundColor: '#fff'
      },
      credits: { enabled: false },
      exporting: { enabled: true },
      xAxis: {
          lineColor:'#fff',
          categories: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday'
          ],
          
          plotBands: [{ // visualize the weekend
              from: 4.5,
              to: 6.5,
              color: '#523b96'
          }]
      },
      yAxis: {
          title: {
              text: 'Band member popularity',
          }
      },
      tooltip: {
          shared: true,
      },
      plotOptions: {
          areaspline: {
              fillOpacity: 0.5
          }
      },
      series: [{
          name: 'John',
          type:'line',
          data: this.data,
          color: '#bdbdbd',
      }, {
          name: 'Jane',
          type:'line',
          data: this.data,
          color: 'black',
      }]
    };
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent (
        new Event('resize')
      )
    },300);
  } 

}
