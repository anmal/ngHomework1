import { Component, OnInit } from '@angular/core';
import {IResortInfo} from '../shared/model/resortInfo';
import {DataService} from '../shared/services/data.service';

@Component({
  selector: 'app-resorts-widget',
  templateUrl: './resorts-widget.component.html',
  styleUrls: ['./resorts-widget.component.css']
})
export class ResortsWidgetComponent implements OnInit {

  public data: IResortInfo[] = [];
  public currResort: IResortInfo = null;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getResorts().subscribe(
      result => {
        this.data = result;
        this.currResort = (this.data.length > 0) ? this.data[0] : null;
      },
      error => {
        this.data = [];
        this.currResort = null; });
  }

  selectResort(obj: IResortInfo) {
    this.currResort = obj;
  }

}
