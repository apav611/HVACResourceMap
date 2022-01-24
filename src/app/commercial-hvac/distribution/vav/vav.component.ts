import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-vav',
  templateUrl: './vav.component.html'
})
export class VavComponent {
  readonly title = 'VAV Boxes';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}