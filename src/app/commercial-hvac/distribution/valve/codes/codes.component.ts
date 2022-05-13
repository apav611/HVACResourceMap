import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './codes.component.html'
})
export class CodesComponent {
  readonly title = 'Valve: Performance Ratings';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
    sharedService.setActiveSelectors('cp-valve');
  }

}
