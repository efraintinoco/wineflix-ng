import { Component, Input } from '@angular/core';
import { heroContent } from '../data';

@Component({
  selector: 'app-header-content',
  templateUrl: './header-content.component.html',
  styleUrls: ['./header-content.component.css']
})

export class HeaderContentComponent {

  heroContent = heroContent;
  
}
