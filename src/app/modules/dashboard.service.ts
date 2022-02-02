import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  // bigCharts() {
  //   return [
  //     {
  //       name: 'Harray styles',
  //       type:'line',
  //       data: [300, 403, 103, 200, 150, 109, 10],
  //   }, {
  //       name: 'Zyan Malik',
  //       type:'line',
  //       data: [100, 31, 24, 43, 93, 52, 14],
  //   },{
  //     name: 'Niall Horan',
  //     type:'line',
  //     data: [10, 30, 43, 30, 35, 50, 24],
  // },{
  //     name: 'Louis Tomlinson',
  //     type:'line',
  //     data: [16, 38, 99, 31, 53, 75, 24],
  // },{
  //     name: 'Liam Payne',
  //     type:'line',
  //     data: [18, 31, 94, 38, 39, 50, 24],
  // }
  //   ];
  // }

  cards() {
    return [95, 56, 79, 45, 43, 75]
  }

  pieChart() {
    return [
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
    ]
  }
}
