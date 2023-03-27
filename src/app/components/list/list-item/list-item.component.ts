import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-menu-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() inputItems: string[] = [];
  @Input() headerText: string = '';
  /*  @Input() styles?: ListStyles;*/
}
