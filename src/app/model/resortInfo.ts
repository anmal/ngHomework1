import {Weather} from './weather';
import {SocialInfo} from './socialInfo';


export class ResortInfoType {
  static hotel = 'Hotel';
  static fishing = 'Fishing';
  static tour = 'Tour';
}


export class ResortInfo {
  img: string;
  address: string;
  phone: number;
  weather: Weather;
  // tslint:disable-next-line:variable-name
  social_info: SocialInfo;
  type: string;
}
