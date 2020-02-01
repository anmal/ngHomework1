import {Component, Input, OnInit} from '@angular/core';
import {Weather} from '../../model/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() object: Weather;

  constructor() { }

  ngOnInit() {
  }

}
