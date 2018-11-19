import { User } from './user';

export class Bicycle {

  _id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  image: string | any;
  user: User;

  constructor() { }

}
