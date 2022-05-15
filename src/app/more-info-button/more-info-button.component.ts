import { Component } from '@angular/core';
import {faPlay, faInfoCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-more-info-button',
  templateUrl: './more-info-button.component.html',
  styleUrls: ['./more-info-button.component.css']
})
export class MoreInfoButtonComponent {

  faPlay = faPlay
  faInfoCircle = faInfoCircle
  title = 'angular-template';

}
