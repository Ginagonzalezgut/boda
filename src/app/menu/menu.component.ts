import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

declare let gtag: Function;

type Direction = 'row' | 'column';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Input() direction: Direction = 'row';
  @Output() clickItem = new EventEmitter<undefined>();

  onClickMenuItem(name?: string) {
    gtag('event', 'click_menu', {
      event_category: 'Click de Menu',
      event_label: name || '',
    });

    this.clickItem.emit();
  }
}
