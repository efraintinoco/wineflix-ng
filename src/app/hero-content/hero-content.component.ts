import { Component, OnInit } from '@angular/core';
import {faPlay, faInfoCircle} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-hero-content',
  templateUrl: './hero-content.component.html',
  styleUrls: ['./hero-content.component.css']
})
export class HeroContentComponent implements OnInit {
  faPlay = faPlay
  faInfoCircle = faInfoCircle
  title = 'angular-template';

  constructor() { }

  ngOnInit(): void {
  }

}
