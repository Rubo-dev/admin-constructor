import { Component, inject } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  public layoutService = inject(LayoutService);

  public addTable(): void {
    let id = this.layoutService.addItem();
    this.layoutService.setDropId(id);
    this.layoutService.dropItem({
      componentRef: 'tableComponent',
    });
  }
}
