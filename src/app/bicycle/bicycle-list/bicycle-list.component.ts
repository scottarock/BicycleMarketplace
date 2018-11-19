import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Bicycle, User } from '../../models';

@Component({
  selector: 'app-bicycle-list',
  templateUrl: './bicycle-list.component.html',
  styleUrls: ['./bicycle-list.component.css']
})
export class BicycleListComponent implements OnInit {

  @Input() bicycles: Bicycle[];
  @Input() currentUser: User;
  @Output() contactUser: EventEmitter<User> = new EventEmitter();
  @Output() deleteBicycle: EventEmitter<Bicycle> = new EventEmitter();

  filter: Bicycle = new Bicycle();

  constructor() { }

  ngOnInit() {
  }

  onContact(bicycle: Bicycle): void {
    this.contactUser.emit(bicycle.user);
  }

  onDelete(bicycle: Bicycle): void {
    this.deleteBicycle.emit(bicycle);
  }

}
