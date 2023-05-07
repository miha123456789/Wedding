import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent {

  protected readonly screen = screen;
  protected readonly window = window;
  public isDesktopView = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktopView = event.target.innerWidth >= 768;
  }
}
