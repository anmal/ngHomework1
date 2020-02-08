import { Component, OnInit } from '@angular/core';
import {IResortInfo} from '../shared/model/resortInfo';
import {DataService} from '../shared/services/data.service';

@Component({
  selector: 'app-resorts-widget',
  templateUrl: './resorts-widget.component.html',
  styleUrls: ['./resorts-widget.component.css']
})
export class ResortsWidgetComponent implements OnInit {

  public resortList: IResortInfo[] = null;
  public currResort: IResortInfo = null;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getResorts().subscribe(
      result => {
        this.resortList = result;
        this.currResort = (this.resortList.length > 0) ? this.resortList[0] : null;
      },
      error => {
        this.resortList = [];
        this.currResort = null;
      });
  }
}
