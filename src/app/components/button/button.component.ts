import {Component, inject} from '@angular/core';
import {BlockService} from "../../services/block.service";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonsComponent {
  private blockService = inject(BlockService);

  public handleClick(domElement: any) {
    const elem = domElement.target.outerText.split(' ').pop();
    this.blockService.setBlock({tagName: elem, display: true});
  }
}
