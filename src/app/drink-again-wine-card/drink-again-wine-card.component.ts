import { Component, Input } from '@angular/core';
import { wines, } from '../data';

type Wine = {
  id: number;
  imageUrl: string;
  isNew?: boolean;
  label: string;
  isFinished?: boolean;
  progress?: number;
}

@Component({
  selector: 'app-drink-again-wine-card',
  templateUrl: './drink-again-wine-card.component.html',
  styleUrls: ['./drink-again-wine-card.component.css']
})
export class DrinkAgainWineCardComponent {

  wines: Wine[] = wines;
}
