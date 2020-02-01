import {Component, Input, OnInit} from '@angular/core';
import {SocialInfo} from '../../model/socialInfo';

@Component({
  selector: 'app-social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.css']
})
export class SocialInfoComponent implements OnInit {

  @Input() object: SocialInfo;

  constructor() { }

  ngOnInit() {
  }

}
