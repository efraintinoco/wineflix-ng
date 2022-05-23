import { Component} from '@angular/core';
import { wines, Wine } from '../data';

@Component({
  selector: 'app-keep-drinking',
  templateUrl: './keep-drinking.component.html',
  styleUrls: ['./keep-drinking.component.css']
})
export class KeepDrinkingComponent {

  wines: Wine[] = wines;

  imageUrl!: string;
  label!: string;
  progress?: number;

}
