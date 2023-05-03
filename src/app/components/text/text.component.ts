import { Component, inject } from '@angular/core';
import { BlockService } from 'src/app/services/block.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent {
  private blockService = inject(BlockService);

  public handleClick(): void {
    this.blockService.setBlock({ tagName: 'textarea', display: true });
  }
}
