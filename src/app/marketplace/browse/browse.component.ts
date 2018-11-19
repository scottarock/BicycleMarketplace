import { Component, OnInit } from '@angular/core';

import { Bicycle, User } from '../../models';
import { BicycleService, UserService } from '../../services';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  bicycles: Bicycle[] = [];
  currentUser: User = new User();
  modalDisplay: string = 'none';
  modalMessage1: string = '';
  modalMessage2: string = '';

  constructor(
    private bicycleService: BicycleService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.bicycleService.getBicycles()
      .subscribe( bicycles => {
        this.bicycles = bicycles;
      });
    this.userService.getUser()
      .subscribe( user => {
        this.currentUser = user;
      });
  }

  contactUser(user: User): void {
    this.modalMessage1 = `Name: ${user.firstName}`;
    this.modalMessage2 = `Email: ${user.email}`;
    this.modalDisplay = 'block';
  }

  deleteBicycle(bicycle: Bicycle): void {
    this.bicycleService.deleteBicycle(bicycle)
      .subscribe( deletedBicycle => {
        this.currentUser.bicycles = this.currentUser.bicycles.filter( bike => bike._id !== deletedBicycle._id)
      })
  }

  closeModal(event: Event): void {
    event.stopPropagation();
    this.modalDisplay = 'none';
    this.modalMessage1 = '';
    this.modalMessage2 = '';
  }

  modalClick(event: Event): void {
    event.stopPropagation();
  }

}
