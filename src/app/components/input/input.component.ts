import { Component } from '@angular/core';
import { BlockService } from 'src/app/services/block.service';
import { DOMElementEnum } from 'src/app/shared/enums/enums';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  public type = DOMElementEnum.INPUT;
  constructor(private blockService: BlockService) {}

  public handleClick(elemType: DOMElementEnum) {
    this.blockService.$subject.next(elemType);
  }
}
