import { Component, OnInit, Input } from '@angular/core';
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
  @Input() data:any = [];

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
          data: this.data,
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
