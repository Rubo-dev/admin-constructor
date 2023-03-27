import {Component, inject} from '@angular/core';
import {BlockService} from "../../services/block.service";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  private blockService = inject(BlockService);

  public handleClick(): void {
    this.blockService.setBlock({tagName: 'image', display: true});
  }
}
