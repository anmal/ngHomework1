import { Component, OnInit } from '@angular/core';
import {ResortInfo} from '../model/resortInfo';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-resorts-widget',
  templateUrl: './resorts-widget.component.html',
  styleUrls: ['./resorts-widget.component.css']
})
export class ResortsWidgetComponent implements OnInit {

  public data: ResortInfo[] = [];
  public currResort: ResortInfo = null;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getHotel().subscribe(
      result => {
        this.data = result;
        this.currResort = (this.data.length > 0) ? this.data[0] : null;
        console.log(this.data);
        console.log(this.currResort);
      },
      error => {
        this.data = [];
        this.currResort = null; });
  }

  selectResort(obj: ResortInfo) {
    this.currResort = obj;
  }

}
