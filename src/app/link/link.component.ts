import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

declare let gtag: Function;

@Component({
  selector: 'app-link',
  imports: [],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
})
export class LinkComponent {
  @Input() isDark: boolean = false;
  @Input() onDark: boolean = false;
  @Input() href: string = '';
  @Input() target: string = '';

  @ViewChild('anchor', { static: true }) anchorRef!: ElementRef;

  onClick() {
    const text = this.anchorRef.nativeElement.textContent.trim();

    gtag('event', 'click_link', {
      event_category: 'Click de Link',
      event_label: text || this.href,
    });
  }
}
