import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-procure',
  templateUrl: './procure.component.html'
})
export class ProcureComponent {
  readonly title = 'Boiler: Procurement and Performance';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
