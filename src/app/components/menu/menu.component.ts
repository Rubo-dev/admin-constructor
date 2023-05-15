import { Component, inject } from '@angular/core';
import { BlockService } from '../../services/block.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  private blockService = inject(BlockService);

  public handleClick(): void {
    this.blockService.setBlock({ tagName: 'menu', display: true });
  }
}
