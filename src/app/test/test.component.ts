import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { SignalTableComponent } from '../signal-table/signal-table.component';
import { SignalElement, SignalService } from '../services/signal.service';

@Component({
  providers: [SignalTableComponent],
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  constructor(
    private signalTable: SignalTableComponent,
    private signalService: SignalService
  ) {}
  // constructor() {}

  options: any;

  mergeOptions: EChartsOption;

  message: string;
  receiveMessage($event: string) {
    this.message = $event;
  }

  gaussian(x: number, mean: number, sigma: number) {
    var gaussianConstant = 1 / Math.sqrt(2 * Math.PI);
    x = (x - mean) / sigma;
    return (gaussianConstant * Math.exp(-0.5 * x * x)) / sigma;
  }

  generateService() {
    this.signalService.generateNew().subscribe((data: SignalElement[]) => {
      this.mergeOptions.series = [];
    });
  }

  generate() {
    // window.alert('Generate new data!');

    let numberOfGaussian = 3;

    const xAxisData = [];
    const dataNew = [];
    for (let i = 0; i < 100; i++) {
      xAxisData.push(i);
      const size = Math.random();
      let sizeFromUser = parseFloat(
        (<HTMLInputElement>document.getElementById('myId')).value
      );

      // Ok working
      // dataNew.push(100 * Math.sin(i / sizeFromUser));
      let mean = 50;
      let sigma = 10;
      dataNew.push(100 * sigma * this.gaussian(i, mean, sigma));
    }

    this.mergeOptions = {
      xAxis: {
        axisLabel: { show: true },
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          name: 'bar3',
          type: 'line',
          data: dataNew,
          animationDelay: (idx: number) => idx * 5,
        },
      ],
    };

    // Create new entry in table
    this.signalTable.update();
  }

  ngOnInit(): void {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
      legend: {
        data: ['bar', 'bar2'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: (idx: number) => idx * 10,
        },
        {
          name: 'bar2',
          type: 'line',
          data: data2,
          animationDelay: (idx: number) => idx * 10 + 100,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx: number) => idx * 5,
    };
  }
}
