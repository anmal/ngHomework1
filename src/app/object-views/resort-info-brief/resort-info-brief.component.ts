import {Component, Input, OnInit} from '@angular/core';
import {ResortInfo} from '../../model/resortInfo';

@Component({
  selector: 'app-resort-info-brief',
  templateUrl: './resort-info-brief.component.html',
  styleUrls: ['./resort-info-brief.component.css']
})
export class ResortInfoBriefComponent implements OnInit {

  @Input() object: ResortInfo;

  constructor() { }

  ngOnInit() {
  }

}
