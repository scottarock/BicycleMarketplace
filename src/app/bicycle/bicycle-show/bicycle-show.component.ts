import { Component, OnInit } from '@angular/core';

import { Bicycle } from '../../models';
import { BicycleService } from '../../services';

@Component({
  selector: 'app-bicycle-show',
  templateUrl: './bicycle-show.component.html',
  styleUrls: ['./bicycle-show.component.css']
})
export class BicycleShowComponent implements OnInit {

  bicycle: Bicycle = new Bicycle();

  constructor(private bicycleService: BicycleService) { }

  ngOnInit() {
    this.bicycleService.getBicycles()
      .subscribe( bicycles => {
        this.bicycle = bicycles[Math.floor(Math.random() * bicycles.length)];
      });
  }

}
