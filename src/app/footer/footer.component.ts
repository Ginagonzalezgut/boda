import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

declare let gtag: Function;

@Component({
  selector: 'app-footer',
  imports: [MenuComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  trackClickGina() {
    gtag('event', 'click_link', {
      event_category: 'Click de link',
      event_label: 'Gina',
    });
  }
}
