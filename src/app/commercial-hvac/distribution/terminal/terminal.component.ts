import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent {
  readonly title = 'Terminal Units';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
  }

}
