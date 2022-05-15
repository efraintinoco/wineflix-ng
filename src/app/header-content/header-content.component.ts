import { Component, OnInit } from '@angular/core';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-content',
  templateUrl: './header-content.component.html',
  styleUrls: ['./header-content.component.css']
})
export class HeaderContentComponent implements OnInit {

  faPlay = faPlay
  faInfoCircle = faInfoCircle
  title = 'angular-template';

  constructor() { }

  ngOnInit(): void {
  }

}
