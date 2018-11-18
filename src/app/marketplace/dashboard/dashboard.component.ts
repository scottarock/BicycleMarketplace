import { Component, OnInit } from '@angular/core';

import { User, Bicycle } from '../../models';
import { UserService, BicycleService } from '../../services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User = new User();
  modalDisplay: string = 'none';
  modalMessage: string = '';

  constructor(
    private userService: UserService,
    private bicycleService: BicycleService
  ) { }

  ngOnInit() {
    this.userService.getUser()
      .subscribe( user => {
        this.user = user;
      });
  }

  addBicycle(bicycle: Bicycle): void {
    bicycle.user = this.user;
    this.bicycleService.addBicycle(bicycle)
      .subscribe( newBike => {
        this.user.bicycles.push(newBike);
      });
  }

  updateBicycle(bicycle: Bicycle): void {
    this.bicycleService.updateBicycle(bicycle)
      .subscribe( updatedBicycle => {
        this.modalMessage = `${updatedBicycle.title} successfully updated`;
        this.modalDisplay = 'block';
      });
  }

  deleteBicycle(bicycle: Bicycle): void {
    this.bicycleService.deleteBicycle(bicycle)
      .subscribe( deletedBicycle => {
        this.user.bicycles = this.user.bicycles.filter( bike => bike._id !== deletedBicycle._id );
      })
  }

  closeModal(event: Event): void {
    event.stopPropagation();
    this.modalDisplay = 'none';
    this.modalMessage = '';
  }

  modalClick(event: Event): void {
    event.stopPropagation();
  }

}
