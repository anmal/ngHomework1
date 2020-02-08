import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {IResortInfo, ResortInfoType} from '../model/resortInfo';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getResorts(): Observable<IResortInfo[]> {
     const mockData: IResortInfo[] = [
       {
         img: '1.jpg',
         address: 'Sed perspiciatis',
         phone: 1285968685,
         weather: {
           title: 'Et harum quidem',
           icon: 'cloud',
           water: 26,
           temperature: 27
         },
         social_info: {
           title: 'Nam libero voluptatem',
           img: 'b1.jpg',
           followers: 2850,
           following: 675,
         },
         type: ResortInfoType.hotel
       },

       {
         img: '3.jpg',
         address: 'Sed perspiciatis2',
         phone: 1274858693,
         weather: {
           title: 'Et harum quidem2',
           icon: 'cloud',
           water: 10,
           temperature: 16
         },
         social_info: {
           title: 'Nam libero voluptatem2',
           img: 'b3.jpg',
           followers: 3283,
           following: 3459,
         },
         type: ResortInfoType.hotel
       }
     ];

     return of(mockData);
  }
}
