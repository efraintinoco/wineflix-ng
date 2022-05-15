import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-drink-again-wine-card',
  templateUrl: './drink-again-wine-card.component.html',
  styleUrls: ['./drink-again-wine-card.component.css']
})
export class DrinkAgainWineCardComponent implements OnInit {
  @Input() isNew?= false;
  @Input() imageUrl!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
