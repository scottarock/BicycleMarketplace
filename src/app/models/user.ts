import { Bicycle } from './bicycle';

export class User {

  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
  bicycleListings: Bicycle[];

  constructor() { }

}
