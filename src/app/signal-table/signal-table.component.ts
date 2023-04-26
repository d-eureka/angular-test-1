import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface SignalElement {
  position: number;
  name: string;
  peak_position: number;
  data: number[];
}

let ELEMENT_DATA: SignalElement[] = [
  { position: 1, name: 'S1', peak_position: 1.0079, data: [1, 2, 3, 4] },
  { position: 2, name: 'S2', peak_position: 4.0026, data: [1, 4, 6, 8] },
  { position: 3, name: 'S3', peak_position: 6.941, data: [1, 6, 9, 12] },
];

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-signal-table',
  styleUrls: ['signal-table.component.css'],
  templateUrl: 'signal-table.component.html',
})
export class SignalTableComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  add() {
    ELEMENT_DATA.push({
      position: 10,
      name: 'SX',
      peak_position: 10,
      data: [2, 2, 2, 2],
    });
  }
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */