import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html'
})
export class CasesComponent {
  readonly title = 'Air Handling Units: Case Studies';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}