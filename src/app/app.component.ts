import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('rotation', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(360deg)'})),
      transition('rotated -> default', animate('2000ms ease-out')),
      transition('default -> rotated', animate('2000ms ease-in'))
    ])
  ]
})
export class AppComponent {
  state = 'default';

  spinTheButton() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }
}
