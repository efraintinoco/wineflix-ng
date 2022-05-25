import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-keep-drinking',
  templateUrl: './keep-drinking.component.html',
  styleUrls: ['./keep-drinking.component.css']
})
export class KeepDrinkingComponent {

  @Input() isFinished?: boolean;
  @Input() imageUrl = "";
  @Input() label = "";

}
