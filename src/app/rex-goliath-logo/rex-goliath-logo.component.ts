import { Component } from '@angular/core';

@Component({
  selector: 'app-rex-goliath-logo',
  templateUrl: './rex-goliath-logo.component.html',
  styleUrls: ['./rex-goliath-logo.component.css']
})
  
export class RexGoliathLogoComponent {

  heroLogo = {
    title: 'Rex Goliath',
    imageUrl: '/assets/rex-goliath-logo.png',
  }

}
