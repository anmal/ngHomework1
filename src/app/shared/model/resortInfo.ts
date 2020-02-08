import {IWeather} from './weather';
import {ISocialInfo} from './socialInfo';


export class ResortInfoType {
  static hotel = 'Hotel';
  static fishing = 'Fishing';
  static tour = 'Tour';
}


export interface IResortInfo {
  img: string;
  address: string;
  phone: number;
  weather: IWeather;
  // tslint:disable-next-line:variable-name
  social_info: ISocialInfo;
  type: string;
}
