import { Component } from '@angular/core';

@Component({
  selector: 'app-keep-drinking-card',
  templateUrl: './keep-drinking-card.component.html',
  styleUrls: ['./keep-drinking-card.component.css']
})

export class KeepDrinkingCardComponent {

  keepDrinkingCard = {
    imageUrl: '/assets/red-wine.jpg',
    progress: 22,
    label: 'Wine',
  }
  
}
