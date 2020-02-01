import {Component, Input, OnInit} from '@angular/core';
import {ResortInfo} from '../../model/resortInfo';

@Component({
  selector: 'app-resort-info-detail',
  templateUrl: './resort-info-detail.component.html',
  styleUrls: ['./resort-info-detail.component.css']
})
export class ResortInfoDetailComponent implements OnInit {

  @Input() object: ResortInfo;

  constructor() { }

  ngOnInit() {
  }

}
