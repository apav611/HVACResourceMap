import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-laboratories',
  templateUrl: './laboratories.component.html'
})
export class LaboratoriesComponent {
  readonly title = 'Lab HVAC';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}