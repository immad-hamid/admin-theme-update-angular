import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  styles: [`
    svg {
      max-width: 12px;
    }
    img {
      vertical-align: bottom;
    }
  `],
  templateUrl: 'footer.template.html'
})
export class FooterComponent { }
