import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Bicycle } from '../../models';

@Component({
  selector: 'app-bicycle-new',
  templateUrl: './bicycle-new.component.html',
  styleUrls: ['./bicycle-new.component.css']
})
export class BicycleNewComponent implements OnInit {

  @Output() newBicycle: EventEmitter<Bicycle> = new EventEmitter();
  bicycle: Bicycle = new Bicycle();

  constructor() { }

  ngOnInit() {
  }

  fileChange(event) {
    if ( event.target.files && event.target.files.length > 0 ) {
      this.bicycle.image = event.target.files[0];
    }
  }

  onSubmit(form: NgForm): void {
    this.newBicycle.emit(this.bicycle);
    this.bicycle = new Bicycle();
    form.resetForm();
  }

}
