import { Component, Input } from '@angular/core';
import { heroContent } from '../data';

@Component({
  selector: 'app-rex-goliath-logo',
  templateUrl: './rex-goliath-logo.component.html',
  styleUrls: ['./rex-goliath-logo.component.css']
})

export class RexGoliathLogoComponent {

  heroContent = heroContent;
}
