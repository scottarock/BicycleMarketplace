import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Bicycle } from '../../models';

@Component({
  selector: 'app-bicycle-update-list',
  templateUrl: './bicycle-update-list.component.html',
  styleUrls: ['./bicycle-update-list.component.css']
})
export class BicycleUpdateListComponent implements OnInit {

  @Input() bicycles: Bicycle[];
  @Output() updateBicycle: EventEmitter<Bicycle> = new EventEmitter();
  @Output() deleteBicycle: EventEmitter<Bicycle> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onUpdate(bicycle: Bicycle): void {
    this.updateBicycle.emit(bicycle);
  }

  onDelete(bicycle: Bicycle): void {
    this.deleteBicycle.emit(bicycle);
  }

}
