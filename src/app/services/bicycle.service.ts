import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Bicycle } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BicycleService {

  base: string = '/api/bicycle';

  constructor(private http: HttpClient) { }

  getBicycles(): Observable<Bicycle[]> {
    return this.http.get<Bicycle[]>(this.base);
  }

  addBicycle(bicycle: Bicycle): Observable<Bicycle> {
    return this.http.post<Bicycle>(this.base, bicycle);
  }

  updateBicycle(bicycle: Bicycle): Observable<Bicycle> {
    return this.http.put<Bicycle>(`${this.base}/${bicycle._id}`, bicycle);
  }

  deleteBicycle(bicycle: Bicycle): Observable<Bicycle> {
    return this.http.delete<Bicycle>(`${this.base}/${bicycle._id}`);
  }

}
