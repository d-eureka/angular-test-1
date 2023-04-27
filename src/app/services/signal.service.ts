import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface SignalElement {
  position: number;
  name: string;
  peak_position: number;
  data: number[];
}

// let ELEMENT_SIGNAL: SignalElement[] = [
//   { position: 1, name: 'S1', peak_position: 1.0079, data: [1, 2, 3, 4] },
//   { position: 2, name: 'S2', peak_position: 4.0026, data: [1, 4, 6, 8] },
//   { position: 3, name: 'S3', peak_position: 6.941, data: [1, 6, 9, 12] },
// ];

let ELEMENT_SIGNAL: SignalElement[] = [];

const SIZE_SIGNAL = 100;

@Injectable()
export class SignalService {
  generateNew(): Observable<SignalElement[]> {
    // commonly something like:
    // return this.httpClient.get('https://example.org/rest-api/items/');

    let mean = Math.floor(Math.random() * SIZE_SIGNAL);
    let sigma = 10;

    const xAxisData = [];
    const dataNew = [];
    for (let i = 0; i < SIZE_SIGNAL; i++) {
      xAxisData.push(i);
      dataNew.push(100 * sigma * this.gaussian(i, mean, sigma));
    }

    let position = ELEMENT_SIGNAL.length + 1;
    ELEMENT_SIGNAL.push({
      position: position,
      name: 'S' + position,
      peak_position: mean,
      data: dataNew,
    });

    return of(ELEMENT_SIGNAL);
  }

  private gaussian(x: number, mean: number, sigma: number) {
    var gaussianConstant = 1 / Math.sqrt(2 * Math.PI);
    x = (x - mean) / sigma;
    return (gaussianConstant * Math.exp(-0.5 * x * x)) / sigma;
  }
}

@Injectable()
export class SomeService {
  doSomething(): Observable<PeriodicElement[]> {
    // commonly something like:
    // return this.httpClient.get('https://example.org/rest-api/items/');

    let randomlyFilledList = this.getTenRandomElements();
    return of(randomlyFilledList);
  }

  private getTenRandomElements(): PeriodicElement[] {
    let result: PeriodicElement[] = [];

    for (let i = 0; i < 10; i++) {
      let randomInt = Math.floor(Math.random() * (ELEMENT_DATA.length - 1));
      result.push(ELEMENT_DATA[randomInt]);
    }

    return result;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
