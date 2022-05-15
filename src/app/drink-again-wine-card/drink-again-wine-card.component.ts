import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drink-again-wine-card',
  templateUrl: './drink-again-wine-card.component.html',
  styleUrls: ['./drink-again-wine-card.component.css']
})
export class DrinkAgainWineCardComponent {

  @Input() isNew?= false;

  drinkAgainWineCard = {
    imageUrl: '/assets/red-wine.jpg',
    label: 'Wine',
  }

}
