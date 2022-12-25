import { BlockService } from '../../services/block.service';
import { Component } from '@angular/core';
import { DOMElementEnum } from 'src/app/shared/enums/enums';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class BlocksComponent {
  public type = DOMElementEnum.BUTTON;
  constructor(private blockService: BlockService) {}

  public handleClick(elemType: DOMElementEnum) {
    this.blockService.$subject.next(elemType);
  }
}
