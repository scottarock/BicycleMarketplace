import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { BicycleService } from './bicycle.service';

export const services: any[] = [
  AuthService,
  UserService,
  BicycleService
];

export * from './auth.service';
export * from './user.service';
export * from './bicycle.service';
