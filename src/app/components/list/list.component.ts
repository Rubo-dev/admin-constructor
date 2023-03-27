import {Component, inject} from '@angular/core';
import {BlockService} from "../../services/block.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  private blockService = inject(BlockService);

  public handleClick(): void {
    this.blockService.setBlock({tagName: 'list', display: true});
  }
}
