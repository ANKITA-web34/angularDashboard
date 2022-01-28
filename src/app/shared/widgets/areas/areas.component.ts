import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widgets-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts; // required
  chartOptions: Highcharts.Options = {};
  
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'areaspline'
      },
      title: {
          text: 'Average fruit consumption during one week'
      },
      legend: {
          layout: 'vertical',
          align: 'left',
          verticalAlign: 'top',
          x: 150,
          y: 100,
          floating: true,
          borderWidth: 1,
          backgroundColor: '#FFFFFF'
      },
      credits: { enabled: false },
      exporting: { enabled: true },
      xAxis: {
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
              color: 'rgba(68, 170, 213, .2)'
          }]
      },
      yAxis: {
          title: {
              text: 'Fruit units'
          }
      },
      tooltip: {
          shared: true,
          valueSuffix: ' units'
      },
      plotOptions: {
          areaspline: {
              fillOpacity: 0.5
          }
      },
      series: [{
          name: 'John',
          type:'line',
          data: [3, 4, 3, 5, 4, 10, 12]
      }, {
          name: 'Jane',
          type:'line',
          data: [1, 3, 4, 3, 3, 5, 4]
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
