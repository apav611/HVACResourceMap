import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-ducting',
  templateUrl: './ducting.component.html',
  styleUrls: ['./ducting.component.scss']
})
export class DuctingComponent {
  readonly title = 'Ducting';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
