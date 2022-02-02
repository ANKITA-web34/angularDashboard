import { Component, Input, OnInit } from '@angular/core';
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
  @Input() data: any = [];
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
              color: '#523b96'
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
          name: 'Harray styles',
          type:'line',
          data: [300, 403, 103, 200, 150, 109, 10],
      }, {
          name: 'Zyan Malik',
          type:'line',
          data: [100, 31, 24, 43, 93, 52, 14],
      },{
        name: 'Niall Horan',
        type:'line',
        data: [10, 30, 43, 30, 35, 50, 24],
    },{
        name: 'Louis Tomlinson',
        type:'line',
        data: [16, 38, 99, 31, 53, 75, 24],
    },{
        name: 'Liam Payne',
        type:'line',
        data: [18, 31, 94, 38, 39, 50, 24],
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
