import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html'
})
export class TypesComponent {
  readonly title = 'Air Handling Units: Types';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}