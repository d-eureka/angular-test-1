import { Component, ChangeDetectorRef } from '@angular/core';
import { SignalElement } from '../services/signal.service';

let ELEMENT_DATA: SignalElement[] = [
  { position: 1, name: 'S1', peak_position: 1.0079, data: [1, 2, 3, 4] },
  { position: 2, name: 'S2', peak_position: 4.0026, data: [1, 4, 6, 8] },
  { position: 3, name: 'S3', peak_position: 6.941, data: [1, 6, 9, 12] },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-signal-table',
  styleUrls: ['signal-table.component.css'],
  templateUrl: 'signal-table.component.html',
})
export class SignalTableComponent {
  signalData = ELEMENT_DATA;
  constructor(private changeDetection: ChangeDetectorRef) {}

  customTB(item: any, index: any) {
    // window.alert('customTB');
    return `${item.id}-${index}`;
  }

  update() {
    // window.alert('Update table');

    ELEMENT_DATA.push({
      position: 10,
      name: 'SX',
      peak_position: 10,
      data: [2, 2, 2, 2],
    });
    this.changeDetection.detectChanges();
  }
}
