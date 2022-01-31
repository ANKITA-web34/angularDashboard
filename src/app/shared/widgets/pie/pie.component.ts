import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widge-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css'],
})
export class PieComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        plotBackgroundColor: '',
        plotBorderWidth: 0,
        plotShadow: false,
      },
      title: {
        text: 'One<br>Direction<br>2022',
        align: 'center',
        verticalAlign: 'middle',
        y: 60,
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white',
            },
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%'],
          size: '110%',
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Fans',
          innerSize: '50%',
          data: [
            ['Australia', 13.29],
            ['Belarus', 13],
            ['Denmark', 3.78],
            ['Japan', 3.42],
            ['India', 58.9,],
            {
              name: 'Other',
              y: 7.61,
              dataLabels: {
                enabled: false,
              },
            },
          ],
        },
      ],
    };
    setTimeout(() => {
      window.dispatchEvent (
        new Event('resize')
      )
    },300);
  }
}
