import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IResortInfo, ResortInfoType} from '../../shared/model/resortInfo';




@Component({
  selector: 'app-resorts-list',
  templateUrl: './resort-list.component.html',
  styleUrls: ['./resort-list.component.css']
})
export class ResortListComponent {

  public resortTypes = [ResortInfoType.hotel, ResortInfoType.fishing, ResortInfoType.tour, ResortInfoType.weather];

  public resorts: IResortInfo[] = null;
  public filteredResorts: IResortInfo[] = null;


  @Input()
  set resortList(list: IResortInfo[]) {
    this.resorts = list;
    this.filteredResorts = list;
  }
  @Input() currResort: IResortInfo = null;

  @Output() currResortChange = new EventEmitter<IResortInfo>();


  constructor() {
  }


  selectResort(obj: IResortInfo) {
    this.currResort = obj;
    this.currResortChange.emit(this.currResort);
  }

  filter(resortType: string) {
    this.filteredResorts = this.resorts.filter(item => item.type === resortType);
  }
}
